export interface WavesOptions {
  duration: number;
  delay: number;
}

export function initFuiWaves(options?: Partial<WavesOptions>): Promise<void> {
  const loadStylesheets = new Promise<void>((resolve, reject) => {
    const loadCSS = (url: string): Promise<HTMLLinkElement> => {
      return new Promise((resolveLink, rejectLink) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        link.setAttribute('data-fui-waves', 'true');

        link.media = 'print';

        link.onload = () => resolveLink(link);
        link.onerror = () => {
          logImportError(`CSS: ${url}`, new Error(`Failed to load ${url}`));
          rejectLink(new Error(`Failed to load ${url}`));
        };

        document.head.appendChild(link);
      });
    };

    loadCSS(new URL('node-waves/dist/waves.min.css', import.meta.url).href)
      .then(() => loadCSS(new URL('flyonui/src/vendor/waves.css', import.meta.url).href))
      .then(() => {
        document.querySelectorAll('link[data-fui-waves="true"]').forEach(link => {
          (link as HTMLLinkElement).media = 'all';
        });
        resolve();
      })
      .catch(reject);
  });

  const wavesImport = import("node-waves")
    .then(Waves => Waves.default.init(options))
    .catch(e => logImportError("node-waves", e));

  return Promise.all([loadStylesheets, wavesImport])
    .then(() => {})
}

function logImportError(resourceName: string, e: any) {
  console.warn(`NgxFui: Could not load ${resourceName}. Make sure node-waves is installed in your project: Try npm install node-waves`);
  console.warn(e);
}
