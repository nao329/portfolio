import { launch } from "https://deno.land/x/carol@v1.1.4/mod.ts";
import { dirname, join } from "https://deno.land/std@0.177.0/path/mod.ts";

const app = await launch({
  title: "Hello Deno!",
  width: 480,
  height: 320,
});

// Chromeが終了したらDenoのプロセスも終了させる
app.onExit().then(() => Deno.exit(0));

const folder = join(dirname(new URL(import.meta.url).pathname), "public");
app.serveFolder(folder); // "./public"ディレクトリ配下からファイルを配信する
await app.load("index.html"); // "./public/index.html"を読み込む
