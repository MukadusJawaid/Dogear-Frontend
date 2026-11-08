import { authPanelContent, forgotContent, loginContent, signUpContent } from "@/data";
import { fetchContent } from "@/lib/cms";
import type { AuthContent, AuthPanelContent } from "@/types";

export const getAuthPanelContent = (): Promise<AuthPanelContent> => fetchContent(authPanelContent);
export const getLoginContent = (): Promise<AuthContent> => fetchContent(loginContent);
export const getSignUpContent = (): Promise<AuthContent> => fetchContent(signUpContent);
export const getForgotContent = (): Promise<AuthContent> => fetchContent(forgotContent);
