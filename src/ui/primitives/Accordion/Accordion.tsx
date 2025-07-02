import { clsx } from "clsx";
import React from "react";
import { DisclosureGroup, Disclosure, Button, DisclosurePanel } from "react-aria-components";
import { IconChevronDown, IconChevronUp } from "icons";
import "./accordion.css";

export type AccordionItemProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ title, children, className }, ref) => {
    return (
      <Disclosure className={clsx(className, "accordion-item")} ref={ref}>
        {({ isExpanded }) => (
          <>
            <Button className="accordion-trigger">
              <span className="accordion-title">{title}</span>
              <span className="accordion-icon">
                {isExpanded ? <IconChevronUp /> : <IconChevronDown />}
              </span>
            </Button>
            <DisclosurePanel className="accordion-content">
              <div className="accordion-content-inner">
                {children}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    );
  }
);

export type AccordionProps = {
  children: React.ReactNode;
  className?: string;
  allowsMultipleExpanded?: boolean;
};

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, className, allowsMultipleExpanded = false }, ref) => {
    return (
      <DisclosureGroup
        className={clsx(className, "accordion")}
        allowsMultipleExpanded={allowsMultipleExpanded}
        ref={ref}
      >
        {children}
      </DisclosureGroup>
    );
  }
);