export const info = (message: string, name = 'Game') => {
  console.info(
    `%c INFO  %c [Game] [${name}] ${message}`,
    'background-color: #3d6fb6;color: black;border-radius:2px;padding:2px;',
    '',
  );
};

export const warn = (message: string, name = 'Game') => {
  console.warn(
    `%c WARN  %c [Game] [${name}] ${message}`,
    'background-color: orange;color: black;border-radius:2px;padding:1px 2px;',
    '',
  );
};

export const error = (message: string, name = 'Game') => {
  console.error(
    `%c ERROR %c [Game] [${name}] ${message}`,
    'background-color: red;color: black;border-radius:2px;padding:2px;',
    '',
  );
};

export const fatal = (message: string, name = 'Game') => {
  throw new Error(`[Game] [${name}] ${message}`);
};

export const debug = (message: string, name = 'Game') => {
  if (process.env.NODE_ENV === 'development') {
    console.info(
      `%c DEBUG %c [Game] [${name}] ${message}`,
      'background-color: #24b47e;color: black;border-radius:2px;padding:2px;',
      '',
    );
  }
};
