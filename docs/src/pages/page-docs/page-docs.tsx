import { Component, Prop, State, h, Watch } from '@stencil/core';
import { INavItem } from '@go-ui/core/dist/types/interfaces';
import { buildSidebar, prepareNavItems, loadContentByPath } from '../../utils/helpers';
import Router from '../../router';

@Component({
  tag: 'page-docs',
  styleUrl: 'page-docs.scss',
})
export class PageDocs {
  @Prop() params: {
    [param: string]: string;
  };

  @State() notfound: boolean = false;
  @State() result = '';
  @State() sidebarNavItems = [] as INavItem[];

  // private source = '';

  private currentUrl = '';
  private meta = null;

  private tocEl: HTMLGoTocElement;

  async componentWillLoad() {
    console.log('Docs page');
    await this.init();
  }

  @Watch('params')
  async init() {
    window.scrollTo({ top: 0 });
    this.currentUrl = this.params[0];
    if (this.currentUrl.endsWith('/')) {
      this.currentUrl = this.currentUrl.substring(0, this.currentUrl.length - 1);
    }
    await this.loadPage();
    await this.loadSidebarNav();
  }

  async loadPage() {
    const content = loadContentByPath(this.currentUrl);
    this.result = content.content;
  }

  async loadSidebarNav() {
    this.sidebarNavItems = buildSidebar();
  }

  @Watch('result')
  refreshToc() {
    if (!this.tocEl) {
      return;
    }
    this.tocEl.init();
  }

  render() {
    const { result, sidebarNavItems, meta } = this;
    return [
      <seo-tags pageTitle={meta?.title}></seo-tags>,
      <div class="sidebar-layout">
        <aside>
          <div class="sidebar">
            <go-nav-list block items={prepareNavItems(sidebarNavItems, Router.activePath)}></go-nav-list>
          </div>
        </aside>
        <main>
          <div class="container">
            <div class="row">
              <div class="col-12 col-desktop-9">
                <div class="content-container" innerHTML={result}></div>
              </div>
              <div class="d-none d-block-desktop col-desktop-3">
                <go-toc ref={el => (this.tocEl = el)} class="toc" selector=".content-container h2" label-class="h6"></go-toc>
              </div>
            </div>
          </div>
        </main>
      </div>,
    ];
  }
}
