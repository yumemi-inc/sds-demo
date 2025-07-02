import { clsx } from "clsx";
import React from "react";
import { DisclosureGroup, Disclosure, Button, DisclosurePanel } from "react-aria-components";
import { IconChevronDown, IconChevronUp } from "icons";
import "./accordion.css";

export type AccordionProps = {
  children: React.ReactNode;
  className?: string;
  allowsMultipleExpanded?: boolean;
};

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, className, allowsMultipleExpanded = false, ...props }, ref) => {
    const classNames = clsx(className, "accordion");

    return (
      <DisclosureGroup
        {...props}
        className={classNames}
        ref={ref}
        allowsMultipleExpanded={allowsMultipleExpanded}
      >
        {children}
      </DisclosureGroup>
    );
  }
);

export type AccordionItemProps = {
  children: React.ReactNode;
  className?: string;
  title: string;
};

export const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, className, title, ...props }, ref) => {
    const classNames = clsx(className, "accordion-item");

    return (
      <Disclosure {...props} className={classNames} ref={ref}>
        {({ isExpanded }) => (
          <>
            <Button className="accordion-trigger">
              <span className="accordion-title">{title}</span>
              {isExpanded ? (
                <IconChevronUp className="accordion-icon" />
              ) : (
                <IconChevronDown className="accordion-icon" />
              )}
            </Button>
            <DisclosurePanel className="accordion-content">
              <div className="accordion-content-inner">{children}</div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    );
  }
);