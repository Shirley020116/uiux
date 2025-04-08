import React from 'react';
import { cx } from 'class-variance-authority';

export const Textarea = React.forwardRef((props, ref) => {
  return (
    <textarea
      ref={ref}
      className={cx("w-full rounded-lg bg-white px-3.5 py-2.5 text-sm border hover:border-zinc-300 focus:border-zinc-300 disabled:opacity-50 dark:bg-transparent dark:border-zinc-600 dark:hover:border-zinc-500 dark:focus:border-zinc-400 resize-none dark:bg-transparent dark:border dark:border-zinc-600 dark:text-white", props.className)}
      {...props}
    />
  );
});

Textarea.displayName = 'Textarea';
