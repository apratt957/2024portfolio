"use client"

import React from 'react';
import Header from './Header';

type WorkLayoutProps = {
    children: React.ReactNode,
}

export default function WorkLayout({
    children
  }: WorkLayoutProps) {
    // Filter out the headerContent and content from children
  const headerContent = React.Children.toArray(children).filter((child: any) => child.type === Header);
  const content = React.Children.toArray(children).filter((child: any) => child.type !== Header);

    return (
        <div>
        {headerContent}
        <div className="content">
          {content}
        </div>
        <style jsx>{`
          .content {
            margin: 20px;
          }
        `}</style>
      </div>
    );
  }