/* globals test, expect */
import { cli } from '../../eslint-cli-test'

const hasRuleIssue = (key, list) => Boolean(~list.findIndex(a => a.ruleId === key))
const execute = cli => text => cli.executeOnText(text).results[0]

test('no-restricted-globals', async () => {
  const validate = execute(cli)

  let code = `
/* eslint-disable no-unused-vars */
history.go()
location.reload()
\n`

  let r = validate(code)

  expect(hasRuleIssue('no-restricted-globals', r.messages)).toBe(false)
  expect(r.errorCount).toBe(0)
  expect(r.warningCount).toBe(0)

  code = `
/* eslint-disable no-unused-vars */
addEventListener('foo', () => {})
\n`

  r = validate(code)

  expect(hasRuleIssue('no-restricted-globals', r.messages)).toBe(true)
  expect(r.errorCount).toBe(1)
  expect(r.warningCount).toBe(0)
})
