export async function run(code, input) {
    await window.Neutralino.filesystem.writeFile(window.NL_PATH + "/code.py", code);
    await window.Neutralino.filesystem.writeFile(window.NL_PATH + "/input.txt", input);

    let command = window.NL_PYNAME + " code.py < input.txt";
    let commandOut = await window.Neutralino.os.execCommand(command);
    return commandOut.stdOut || commandOut.stdErr;
 }
