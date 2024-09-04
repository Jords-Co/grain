import { skipToMainContent } from "$digerati/skipToMainContent";
import { currentYear } from "$digerati/currentYear";
import { autoPlayTabs } from "$grain/autoPlayTabs";
import { charts } from "$grain/charts";

window.Webflow || [];
window.Webflow.push(() => {
  skipToMainContent();
  currentYear();
  autoPlayTabs();
  charts();
});