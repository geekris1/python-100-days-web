import { useRef, useEffect, useCallback } from 'react'
import { EditorView, keymap, lineNumbers, highlightActiveLine } from '@codemirror/view'
import { EditorState } from '@codemirror/state'
import { python } from '@codemirror/lang-python'
import { oneDark } from '@codemirror/theme-one-dark'
import { defaultKeymap, indentWithTab } from '@codemirror/commands'
import {
  syntaxHighlighting,
  defaultHighlightStyle,
  bracketMatching,
} from '@codemirror/language'
import { closeBrackets } from '@codemirror/autocomplete'

interface PythonEditorProps {
  initialCode: string
  onChange?: (code: string) => void
  readonly?: boolean
}

export default function PythonEditor({ initialCode, onChange, readonly }: PythonEditorProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const viewRef = useRef<EditorView | null>(null)

  const getCode = useCallback(() => {
    return viewRef.current?.state.doc.toString() ?? initialCode
  }, [initialCode])

  useEffect(() => {
    if (!containerRef.current) return

    const state = EditorState.create({
      doc: initialCode,
      extensions: [
        lineNumbers(),
        highlightActiveLine(),
        bracketMatching(),
        closeBrackets(),
        python(),
        oneDark,
        syntaxHighlighting(defaultHighlightStyle),
        keymap.of([...defaultKeymap, indentWithTab]),
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            onChange?.(update.state.doc.toString())
          }
        }),
        EditorState.readOnly.of(!!readonly),
        EditorView.theme({
          '&': { fontSize: '14px', height: '100%' },
          '.cm-scroller': { overflow: 'auto', maxHeight: '400px' },
          '.cm-gutters': { borderRight: '1px solid #334155' },
        }),
      ],
    })

    const view = new EditorView({ state, parent: containerRef.current })
    viewRef.current = view

    return () => {
      view.destroy()
      viewRef.current = null
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Expose getCode for parent via ref if needed
  ;(PythonEditor as any)._getCode = getCode

  return <div ref={containerRef} className="overflow-hidden rounded-b-xl" />
}

export { PythonEditor }
