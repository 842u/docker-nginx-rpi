import { ReactNode } from 'react';

export type SpecificToolIconProps = {
  className?: string;
};

export type ToolIconProps = {
  className?: string;
  href: string;
  title: string;
  children: ReactNode;
};

export function ToolIcon({ className, href, title, children }: ToolIconProps) {
  return (
    <a
      className={`inline-block ${className}`}
      href={href}
      rel="noreferrer"
      target="_blank"
      title={title}
    >
      {children}
    </a>
  );
}
