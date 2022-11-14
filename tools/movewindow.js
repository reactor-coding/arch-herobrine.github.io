class archMoveWindow {
  getInfo() {
    return {
      id: 'archMoveWindow', // change this if you make an actual extension!
      name: 'Move Window',
      blocks: [
        {
          opcode: 'moveto',
          blockType: Scratch.BlockType.COMMAND,
          text: 'window.moveBy([ONE],[TWO])',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            },
            TWO: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            }
          }
        }
      ]
    };
  }
  moveto(args) {
    (async function () {
      await setTimeout(function(){window.moveBy(args.ONE, args.TWO)},33)
    }
    )()
  }
}
Scratch.extensions.register(new archMoveWindow());