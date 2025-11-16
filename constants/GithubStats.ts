// interface for the GitHub Card Values, like Title, Image src, etc.
export interface GitHubCard {
  header: string;
  headerSecondary: string;
  src: string;
  srcDark: string;
  alt: string;
}

/**
 * A function that returns a array, the Values are dynamic and are provided by the Component
 * @param Github_Contributions Github Contributions Card Header
 * @param Github_Contributions_Secondary Subtitle to the Card (Contributions)
 * @param Github_Contributions_src src to the Image (Contributions)
 * @param Github_Contributions_src_dark src to the Image displayed in dark Mode (Contributions)
 * @param Github_Contributions_alt alt text for the Image (Contributions)
 * @param Github_Statistics Github Statistics Card Header
 * @param Github_Statistics_Secondary Subtitle to the Card (Statistics)
 * @param Github_Statistics_src src to the Image (Statistics)
 * @param Github_Statistics_src_dark src to the Image displayed in dark Mode (Statistics)
 * @param Github_Statistics_alt alt text for the Image (Statistics)
 * @param Github_Repositorys Github Repositorys Card Header
 * @param Github_Repositorys_Secondary Subtitle to the Card (Repositorys)
 * @param Github_Repositorys_src src to the Image (Repositorys)
 * @param Github_Repositorys_src_dark src to the Image displayed in dark Mode (Repositorys)
 * @param Github_Repositorys_alt alt text for the Image (Repositorys)
 * @returns an Array to iterate through the Values
 */
export const GitHubStats = (
  Github_Contributions: string,
  Github_Contributions_Secondary: string,
  Github_Contributions_src: string,
  Github_Contributions_src_dark: string,
  Github_Contributions_alt: string,
  Github_Statistics: string,
  Github_Statistics_Secondary: string,
  Github_Statistics_src: string,
  Github_Statistics_src_dark: string,
  Github_Statistics_alt: string,
  Github_Repositorys: string,
  Github_Repositorys_Secondary: string,
  Github_Repositorys_src: string,
  Github_Repositorys_src_dark: string,
  Github_Repositorys_alt: string
) => {
  const GithubCards: GitHubCard[] = [
    {
      header: Github_Contributions,
      headerSecondary: Github_Contributions_Secondary,
      src: Github_Contributions_src,
      srcDark: Github_Contributions_src_dark,
      alt: Github_Contributions_alt,
    },
    {
      header: Github_Statistics,
      headerSecondary: Github_Statistics_Secondary,
      src: Github_Statistics_src,
      srcDark: Github_Statistics_src_dark,
      alt: Github_Statistics_alt,
    },
    {
      header: Github_Repositorys,
      headerSecondary: Github_Repositorys_Secondary,
      src: Github_Repositorys_src,
      srcDark: Github_Repositorys_src_dark,
      alt: Github_Repositorys_alt,
    },
  ];
  return GithubCards;
};
