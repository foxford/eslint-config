/* globals test, expect */
import { cli } from '../../eslint-cli-test'

const hasRuleIssue = (key, list) => Boolean(~list.findIndex(a => a.ruleId === key))
const execute = cli => text => cli.executeOnText(text).results[0]

test('no-confusing-arrow', async () => {
  const validate = execute(cli)

  const code = `
/* eslint-disable no-unused-vars */
const foo = bar => bar ? 2 : 3
\n`

  const r = validate(code)

  expect(hasRuleIssue('no-confusing-arrow', r.messages)).toBe(false)
  expect(r.errorCount).toBe(0)
  expect(r.warningCount).toBe(0)
})
