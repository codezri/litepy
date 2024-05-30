import { filesystem, os } from "@neutralinojs/lib";

export async function run(code, input) {
    await filesystem.writeFile(window.NL_PATH + "/code.py", code);
    await filesystem.writeFile(window.NL_PATH + "/input.txt", input);

    let command = window.NL_PYNAME + " code.py < input.txt";
    let commandOut = await os.execCommand(command);
    return commandOut.stdOut || commandOut.stdErr;
 }
