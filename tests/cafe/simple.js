import { Selector } from "testcafe";

const base = "http://localhost:5000/services/component-template-designer";

fixture`log`.page`${base}/index.html`;

test("overview", async t => {
  await t.wait(1000);
  const log = Selector("#log");

  await t
    .expect(Selector("#log").innerText)
    .contains("line 1\nline 2\nline 3\nline 4\n");
});
