export class PyRunner {
  init() {

  }

  async run(options) {
    await window.Neutralino.filesystem.writeFile({
      fileName: window.NL_PATH + "/code.py",
      data: options.code
    });

    await window.Neutralino.filesystem.writeFile({
      fileName: window.NL_PATH + "/input.txt",
      data: options.input
    });

    let command = window.NL_PYNAME + " code.py < input.txt > output.txt";

    await window.Neutralino.os.execCommand({
      command
    });

    let response = await window.Neutralino.filesystem.readFile({
      fileName: window.NL_PATH + "/output.txt"
    });

    return response.data;
  }
}
