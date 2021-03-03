import { DataProvider } from "./Data";
import { ReposProvider } from "./Repos";
import { FollowersProvider } from "./Followers";
import { FollowingProvider } from "./Following";
import { FollowerProvider } from "./Follower";
import { FollowingUserProvider } from "./FollowingUser";
import { AuthenticatorProvider } from "./Authenticator";

const Providers = ({ children }) => {
  return (
    <AuthenticatorProvider>
      <DataProvider>
        <ReposProvider>
          <FollowingProvider>
            <FollowersProvider>
              <FollowerProvider>
                <FollowingUserProvider>{children}</FollowingUserProvider>
              </FollowerProvider>
            </FollowersProvider>
          </FollowingProvider>
        </ReposProvider>
      </DataProvider>
    </AuthenticatorProvider>
  );
};

export default Providers;
