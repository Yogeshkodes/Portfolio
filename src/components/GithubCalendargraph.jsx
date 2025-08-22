import { useRef, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import "../index.css"; // Ensure styles are imported

function GitHubSection() {
  const calendarRef = useRef(null);

  useEffect(() => {
    const scrollToEnd = () => {
      if (calendarRef.current) {
        // Target the actual scrollable container inside react-github-calendar
        const scrollContainer = calendarRef.current.querySelector(
          ".react-activity-calendar__scroll-container"
        );

        if (scrollContainer) {
          // Wait for the calendar to fully load, then scroll to end
          setTimeout(() => {
            scrollContainer.scrollLeft =
              scrollContainer.scrollWidth - scrollContainer.clientWidth;
          }, 300);
        }
      }
    };

    // Initial scroll
    scrollToEnd();

    // Also scroll after a longer delay to ensure GitHub data is loaded
    const timeoutId = setTimeout(scrollToEnd, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="mt-15 border border-neutral-200 p-2 rounded-lg shadow">
      <div ref={calendarRef} className="calendar-wrapper">
        <GitHubCalendar
          username="yogeshkodes"
          hideMonthLabels={true}
          colorScheme="light"
          fontSize={16}
        />
      </div>
    </div>
  );
}

export default GitHubSection;
