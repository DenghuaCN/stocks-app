import { useEffect, useRef } from "react";

const useTradingViewWidget = (
  scriptUrl: string,
  config: Record<string, unknown>,
  height = 600
) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return; // 确保ref已分配
    if (containerRef.current.dataset.loaded) return; // 防止重复加载

    containerRef.current.innerHTML = `<div class="tradingview-widget-container__widget" style="width: 100%; height: ${height}px;"></div>`

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    // script.innerHTML = JSON.stringify(config)
    script.textContent = JSON.stringify(config)

    containerRef.current.appendChild(script);
    containerRef.current.dataset.loaded = "true"; // 标记为已加载

    // 卸载hook
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        delete containerRef.current.dataset.loaded; // 重置加载标记
      }
    }

  }, [scriptUrl, config, height]);

  return containerRef;
};

export default useTradingViewWidget;
