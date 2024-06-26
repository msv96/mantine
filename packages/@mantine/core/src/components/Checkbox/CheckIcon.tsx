import { rem } from '../../core';

export interface CheckboxIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  indeterminate: boolean | undefined;
}

export interface CheckIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export function CheckIcon({ size, style, ...others }: CheckIconProps) {
  const _style = size !== undefined ? { width: rem(size), height: rem(size), ...style } : style;

  return (
    <svg
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={_style}
      aria-hidden
      {...others}
    >
      <path
        d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function CheckboxIcon({ indeterminate, ...others }: CheckboxIconProps) {
  if (indeterminate) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 6"
        aria-hidden
        {...others}
      >
        <rect width="32" height="6" fill="currentColor" rx="3" />
      </svg>
    );
  }

  return <CheckIcon {...others} />;
}
