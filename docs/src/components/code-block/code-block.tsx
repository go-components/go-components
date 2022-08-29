import { Component, h, Prop, Watch } from '@stencil/core';
import hljs from 'highlight.js';

@Component({
  tag: 'code-block',
  styleUrl: 'code-block.scss',
})
export class CodeBlock {
  @Prop() code = '';
  @Prop() language = 'html';

  componentDidLoad() {
    this.highlight();
  }

  @Watch('code')
  highlight() {
    hljs.configure({ ignoreUnescapedHTML: true });
    hljs.highlightAll();
  }
  render() {
    const { code, language } = this;
    if (!code) {
      return;
    }
    return (
      <pre class="code-block">
        <copy-code-btn code={code}></copy-code-btn>
        <code class={`language-${language}`}>{code}</code>
      </pre>
    );
  }
}
