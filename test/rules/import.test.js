/* globals test, expect */
import { cli } from '../../eslint-cli-test'

const hasRuleIssue = (key, list) => Boolean(~list.findIndex(a => a.ruleId === key))
const execute = a => text => a.executeOnText(text).results[0]

test('import/newline-after-import', async () => {
  const validate = execute(cli)

  let code = `
/* eslint-disable no-unused-vars */
import foo from './foo'
const bar = foo
\n`

  let r = validate(code)

  expect(hasRuleIssue('import/newline-after-import', r.messages)).toBe(true)
  expect(r.errorCount).toBe(0)
  expect(r.warningCount).toBe(1)

  code = `
/* eslint-disable no-unused-vars */
import foo from './foo'

const bar = foo
\n`

  r = validate(code)

  expect(hasRuleIssue('import/newline-after-import', r.messages)).toBe(false)
  expect(r.errorCount).toBe(0)
  expect(r.warningCount).toBe(0)
})

test('import/order', async () => {
  const validate = execute(cli)

  const code = `
/* eslint-disable no-unused-vars */
import lib from 'lib'

import bar from '../bar'

import foo from './foo'
\n`

  const r = validate(code)

  expect(hasRuleIssue('import/order', r.messages)).toBe(false)
  expect(r.errorCount).toBe(0)
  expect(r.warningCount).toBe(0)
})

test('import/no-named-default', async () => {
  const validate = execute(cli)

  const code = `
/* eslint-disable no-unused-vars */
import { default as foo } from './foo'
\n`

  const r = validate(code)

  expect(hasRuleIssue('import/no-named-default', r.messages)).toBe(true)
  expect(r.errorCount).toBe(1)
  expect(r.warningCount).toBe(0)
})

test('import/extensions', async () => {
  const validate = execute(cli)

  const code = `
/* eslint-disable no-unused-vars */
import image from 'image.png'

import bar from './bar.json'

import style from './style.css'
\n`

  const r = validate(code)

  expect(hasRuleIssue('import/extensions', r.messages)).toBe(false)
  expect(r.errorCount).toBe(0)
  expect(r.warningCount).toBe(0)
})
