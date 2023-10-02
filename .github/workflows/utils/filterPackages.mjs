import axios from 'axios';

export async function getPackageVersions(packageType, packageName, token) {
  try {
    const response = await axios({
      method: 'get',
      url: `https://api.github.com/user/packages/${packageType}/${packageName}/versions`,
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${token}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });

    return response.data;
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

export async function filterPackageVersions(packageVersions) {
  const filteredPackageVersions = packageVersions.filter(
    (version) => !version.metadata.container.tags.length,
  );

  return filteredPackageVersions;
}

export async function getPackageVersionsIDs(packageVersions) {
  const packageVersionsIDs = packageVersions.map((version) => version.id);

  return packageVersionsIDs;
}
