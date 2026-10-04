import { Component } from 'react'

// Prinde erorile de randare. Fără `fallback`, arată un mesaj simplu (în loc de pagină albă).
export default class ErrorBoundary extends Component {
  state = { error: null }
  static getDerivedStateFromError(error) { return { error } }
  componentDidCatch(error) { console.error(error) }
  render() {
    if (!this.state.error) return this.props.children
    if (this.props.fallback !== undefined) return this.props.fallback
    return (
      <div className="mx-auto max-w-lg p-8 text-center">
        <h1 className="text-2xl font-bold">Ceva nu a mers bine</h1>
        <p className="mt-2">Reîncarcă pagina. Dacă problema continuă, scrie-ne.</p>
        <pre className="mt-4 overflow-auto rounded-xl bg-white/70 p-3 text-left text-xs">{String(this.state.error?.message || this.state.error)}</pre>
        <button onClick={() => window.location.reload()} className="btn-primary mt-4">Reîncarcă</button>
      </div>
    )
  }
}
