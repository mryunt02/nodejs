import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv))
  .command(
    "new <note>",
    "Create a new note",
    (yargs) => {
      return yargs.positional("note", {
        describe: "Note to be created",
        type: "string",
      });
    },
    (argv) => {
      console.log(argv.note);
    }
  )
  .option("tags", {
    alias: "t",
    type: "string",
    description: "Tags to be added to the note",
  })
  .demandCommand(1)
  .parse();
