/* globals test, expect */
import { cli } from '../../eslint-cli-test'

const hasRuleIssue = (key, list) => Boolean(~list.findIndex(a => a.ruleId === key))
const execute = cli => text => cli.executeOnText(text).results[0]

test('no-unused-vars', async () => {
  const validate = execute(cli)

  const code = `
const foo = 'bar'
\n`

  const r = validate(code)

  expect(hasRuleIssue('no-unused-vars', r.messages)).toBe(true)
  expect(r.errorCount).toBe(0)
  expect(r.warningCount).toBe(1)
})
