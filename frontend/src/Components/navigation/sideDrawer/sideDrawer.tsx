import React, { useState } from 'react';
import classes from './sideDrawer.module.css';

interface SideDrawerProps {
  open: boolean;
  closed: () => void;
}

type NavLeaf = { label: string; href: string };
type NavGroup = { label: string; items: { label: string; href: string }[] };
type MobileNavItem = NavLeaf | NavGroup;

function isGroup(item: MobileNavItem): item is NavGroup {
  return 'items' in item;
}

const MOBILE_ITEMS: MobileNavItem[] = [
  { label: 'דף ראשי', href: '/' },
  { label: 'אודות', href: '/#about' },
  {
    label: 'כלי הגשה',
    items: [
      { label: 'צלחות', href: 'category?Id=3&subId=5' },
      { label: 'כוסות', href: 'category?Id=3&subId=3' },
      { label: 'סכו"ם', href: 'category?Id=3&subId=4' },
      { label: 'קערות בר', href: 'category?Id=3&subId=1' },
      { label: 'קערות הגשה', href: 'category?Id=3&subId=8' },
      { label: 'סלטרים', href: 'category?Id=3&subId=7' },
      { label: 'שיפינגים', href: 'category?Id=3&subId=9' },
      { label: 'סירים', href: 'category?Id=3&subId=6' },
      { label: 'כלים נלווים', href: 'category?Id=3&subId=2' },
    ],
  },
  {
    label: 'ריהוט',
    items: [
      { label: 'שולחנות', href: 'category?Id=2&subId=3' },
      { label: 'כסאות', href: 'category?Id=2&subId=2' },
      { label: 'מזנונים', href: 'category?Id=2&subId=1' },
    ],
  },
  {
    label: 'ציוד אלטרנטיבי',
    items: [
      { label: 'פוטונים', href: 'category?Id=1&subId=4' },
      { label: 'כריות', href: 'category?Id=1&subId=5' },
      { label: 'מחצלות', href: 'category?Id=1&subId=3' },
      { label: 'הדומים', href: 'category?Id=1&subId=2' },
      { label: 'פופים', href: 'category?Id=1&subId=1' },
    ],
  },
  {
    label: 'ציוד נלווה',
    items: [
      { label: 'אוהלים', href: 'category?Id=4&subId=5' },
      { label: 'מיזוג', href: 'category?Id=4&subId=1' },
      { label: 'פרגודים', href: 'category?Id=4&subId=2' },
      { label: 'מפות', href: 'category?Id=4&subId=6' },
      { label: 'מפיות', href: 'category?Id=4&subId=4' },
      { label: 'כלי חימום וקירור', href: 'category?Id=4&subId=3' },
      { label: 'שמשיות', href: 'category?Id=4&subId=7' },
    ],
  },
];

const SideDrawer: React.FC<SideDrawerProps> = ({ open, closed }) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (label: string) =>
    setExpanded(prev => (prev === label ? null : label));

  return (
    <div className={`${classes.mobileNav} ${open ? classes.open : ''}`}>
      <button className={classes.closeBtn} onClick={closed}>✕</button>
      {MOBILE_ITEMS.map(item => (
        <div key={item.label}>
          {isGroup(item) ? (
            <>
              <button
                className={classes.navItem}
                onClick={() => toggle(item.label)}
              >
                {item.label}
                <span className={classes.chevron}>
                  {expanded === item.label ? '▴' : '▾'}
                </span>
              </button>
              {expanded === item.label && (
                <div className={classes.subItems}>
                  {item.items.map(sub => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      className={classes.subItem}
                      onClick={closed}
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </>
          ) : (
            <a
              href={item.href}
              className={classes.navItem}
              onClick={closed}
            >
              {item.label}
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideDrawer;
