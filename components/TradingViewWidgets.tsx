"use client";
import React, { memo } from "react";

import useTradingViewWidget from "@/hooks/useTradingViewWidget";
import { cn } from "@/lib/utils";

interface tradingViewWidgetProps {
  title?: string;
  scriptUrl: string;
  config: Record<string, unknown>;
  height?: number;
  className?: string;
}

const TradingViewWidget = ({
  title,
  scriptUrl,
  config,
  height = 600, // 组件默认高度
  className
}: tradingViewWidgetProps) => {
  const containerRef = useTradingViewWidget(scriptUrl, config, height);

  return (
    <div className="w-full ">
      {title && <h3 className="font-semibold text-2xl text-gray-100 mb-5">{title}</h3>}

      <div ref={containerRef} className="tradingview-widget-container">
        <div
          style={{ height, width: "100%" }}
          className={cn('tradingview-widget-container__widget', className)}
        />
      </div>

    </div>

  );
};

export default memo(TradingViewWidget);
