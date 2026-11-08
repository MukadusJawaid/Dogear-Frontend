/**
 * Single seam for content access. Today every `*.service.ts` returns local mock data
 * through this helper; swap the body for a real CMS client (Sanity, Strapi, Contentful…)
 * and no page or component has to change.
 */
export async function fetchContent<T>(mock: T): Promise<T> {
  return mock;
}
