import axios from 'axios';

import {
  filterPackageVersions,
  getPackageVersions,
  getPackageVersionsIDs,
} from './filterPackages.mjs';

const { PACKAGE_TYPE, PACKAGE_NAME, TOKEN } = process.env;

async function deletePackageVersion(
  packageType,
  packageName,
  token,
  packageVersionID,
) {
  try {
    await axios({
      method: 'delete',
      url: `https://api.github.com/user/packages/${packageType}/${packageName}/versions/${packageVersionID}`,
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${token}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });

    console.log(`Package version with ID: ${packageVersionID} deleted.`);
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
  }
}

(async () => {
  const packageVersions = await getPackageVersions(
    PACKAGE_TYPE,
    PACKAGE_NAME,
    TOKEN,
  );

  const filteredPackagesVersions = await filterPackageVersions(packageVersions);

  const packageVersionsID = await getPackageVersionsIDs(
    filteredPackagesVersions,
  );

  packageVersionsID.map(
    async (versionID) =>
      await deletePackageVersion(PACKAGE_TYPE, PACKAGE_NAME, TOKEN, versionID),
  );
})();
