/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Code } from "../models/Code";
import type { Redirect } from "../models/Redirect";
import type { RedirectArray } from "../models/RedirectArray";
import type { URL } from "../models/URL";
import type { User } from "../models/User";
import type { UserPost } from "../models/UserPost";
import { request as __request } from "../core/request";

export class Service {
  /**
   * Add a new User with a provided Usern Name nand Email, and an empty collection of Redirects
   * @param requestBody Contains a Username and Email
   * @returns any User Created
   * @throws ApiError
   */
  public static async createUser(requestBody: UserPost): Promise<any> {
    const result = await __request({
      method: "POST",
      path: `/users`,
      body: requestBody,
      errors: {
        500: `Internal Server Error`,
      },
    });
    return result.body;
  }

  /**
   * Search for a user using the provided Email
   * @param email
   * @returns User User Found
   * @throws ApiError
   */
  public static async getUserByEmail(email?: string): Promise<User> {
    const result = await __request({
      method: "GET",
      path: `/users`,
      query: {
        email: email,
      },
      errors: {
        404: `User Not Found`,
      },
    });
    return result.body;
  }

  /**
   * Append a Redirect to a User's collection of Redirects
   * @param userId the user's id
   * @param requestBody
   * @returns any Redirect Appended
   * @throws ApiError
   */
  public static async appendToUserRedirects(
    userId: string,
    requestBody: Redirect
  ): Promise<any> {
    const result = await __request({
      method: "POST",
      path: `/users/${userId}/redirects`,
      body: requestBody,
      errors: {
        500: `Internal Server Error`,
      },
    });
    return result.body;
  }

  /**
   * Set a User's collection of Redirects to the request body
   * @param userId the user's id
   * @param requestBody
   * @returns any User redirects updated
   * @throws ApiError
   */
  public static async setUserRedirects(
    userId: string,
    requestBody: Array<Redirect>
  ): Promise<any> {
    const result = await __request({
      method: "PUT",
      path: `/users/${userId}/redirects`,
      body: requestBody,
      errors: {
        500: `Internal Server Error`,
      },
    });
    return result.body;
  }

  /**
   * Post a collection of URLs, returning the Redirects
   * @param requestBody An Array of URLs to shorten
   * @returns any Successes and Failures from Shortening a Set of URLs.
   * @throws ApiError
   */
  public static async createRedirectsBatch(requestBody: Array<URL>): Promise<{
    successful?: RedirectArray;
    failed?: Array<{
      code?: URL;
      reason?: string;
    }>;
  }> {
    const result = await __request({
      method: "POST",
      path: `/redirects/createRedirects`,
      body: requestBody,
    });
    return result.body;
  }

  /**
   * Post a Collection of Codes, returning the Redirects
   * @param requestBody An Array of Codes to Query
   * @returns any Successes and Failures from Querying a set of Redirects
   * @throws ApiError
   */
  public static async getRedirectsBatch(requestBody: RedirectArray): Promise<{
    successful?: RedirectArray;
    failed?: Array<{
      code?: Code;
      reason?: string;
    }>;
  }> {
    const result = await __request({
      method: "POST",
      path: `/redirects/queryRedirects`,
      body: requestBody,
    });
    return result.body;
  }

  /**
   * Get a Redirect by Code
   * @param redirectCode
   * @returns Redirect Redirect Found
   * @throws ApiError
   */
  public static async getRedirectByCode(
    redirectCode?: Code
  ): Promise<Redirect> {
    const result = await __request({
      method: "GET",
      path: `/redirects`,
      query: {
        redirectCode: redirectCode,
      },
      errors: {
        404: `Redirect Not Found`,
      },
    });
    return result.body;
  }

  /**
   * Shorten a URL, returning a redirect Code
   * @param url
   * @returns Redirect Redirect Created
   * @throws ApiError
   */
  public static async createRedirect(url?: URL): Promise<Redirect> {
    const result = await __request({
      method: "POST",
      path: `/redirects`,
      query: {
        url: url,
      },
      errors: {
        500: `Internal Server Error`,
      },
    });
    return result.body;
  }

  /**
   * Follow a redirect
   * @param code
   * @returns void
   * @throws ApiError
   */
  public static async followRedirect(code: Code): Promise<void> {
    const result = await __request({
      method: "GET",
      path: `/${code}`,
      errors: {
        302: `Redirect Found`,
        404: `Redirect Not Found`,
      },
    });
    return result.body;
  }
}
