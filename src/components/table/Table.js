import {ExcelComponents} from '@core/ExcelComponents'
import {createTable} from './table.template'
import {resizeHandler} from './resizeHandler'
import {shouldResize} from './table.functions'

export class Table extends ExcelComponents {
  static className = 'excel__table'
  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown'],
    })
  }

  toHTML() {
    return createTable(20)
  }
  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event)
    }
  }
}
