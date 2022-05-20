module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'How should your Component be called?',
  },
  {
    type: 'select',
    name: 'type',
    message: 'What type is your Component?',
    initial: 1,
    choices: [
      { name: 'Atoms', message: 'Atom' },
      { name: 'Molecules', message: 'Molecule' },
      { name: 'Organisms', message: 'Organism' },
      { name: 'Templates', message: 'Template' },
    ],
  },
  {
    type: 'confirm',
    name: 'hasProps',
    message: 'Does your Component have props?',
  },
];
