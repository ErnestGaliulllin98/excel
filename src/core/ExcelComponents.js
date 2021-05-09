import {DomListener} from '@core/DomListener'

export class ExcelComponents extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.unsubscribers = []
    this.prepare()
  }
  // Настраиваем наш компонент до init
  prepare() {}

  // Возвращает шаблон компонента
  toHTML() {
    return ''
  }
  // Уведомляем слушателей про события
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  // Подписываемся на события
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  // Инициализация компонента
  // Добавления слушателей
  init() {
    this.initDOMListener()
  }
  // Удаление компонента
  // Удаление слушателей
  destroy() {
    this.removeDOMListeners()
    this.unsubscribers.forEach( unsub => unsub())
  }
}
