/* globals test, expect */
import { cli } from '../../eslint-cli-test'

const hasRuleIssue = (key, list) => Boolean(~list.findIndex(a => a.ruleId === key))
const execute = cli => text => cli.executeOnText(text).results[0]


test('no-bitwise', async () => {
  const validate = execute(cli)

  const code = `
/* eslint-disable no-unused-vars */
const foo = ~'bar'
\n`

  const r = validate(code)

  expect(hasRuleIssue('no-bitwise', r.messages)).toBe(false)
  expect(r.errorCount).toBe(0)
  expect(r.warningCount).toBe(0)
})

test('array-element-newline', async () => {
  const validate = execute(cli)

  let code = `
/* eslint-disable no-unused-vars */
const foo = [
  'bar1',
  'bar2',
  'bar3',
]
\n`

  let r = validate(code)

  expect(hasRuleIssue('array-element-newline', r.messages)).toBe(true)
  expect(r.errorCount).toBe(2)
  expect(r.warningCount).toBe(0)

  code = `
/* eslint-disable no-unused-vars */
const foo = [
  'bar1',
  'bar2',
  'bar3',
  'bar4',
]
\n`

  r = validate(code)

  expect(hasRuleIssue('array-element-newline', r.messages)).toBe(false)
  expect(r.errorCount).toBe(0)
  expect(r.warningCount).toBe(0)
})
