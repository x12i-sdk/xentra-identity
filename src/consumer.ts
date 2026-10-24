import type { XentraIdentityProviderAdapter, VerifiedExternalIdentity } from '@x12i/xentra-identity';

type VerificationPort = Pick<XentraIdentityProviderAdapter, 'verifyExternalToken'>;
// A synthetic identity fixture isolates the adapter contract from any external token service.
const known: VerifiedExternalIdentity = { externalUserId: 'fixture-user', roles: ['reader'] };
const fixturePort: VerificationPort = {
  async verifyExternalToken(input) {
    if (input.token !== 'synthetic-fixture') throw new Error('Unknown fixture token');
    return known;
  },
};
// @ts-expect-error The external identity requires a string user identifier.
const invalidId: VerifiedExternalIdentity['externalUserId'] = 7;
void invalidId;
console.log(JSON.stringify(await fixturePort.verifyExternalToken({ token: 'synthetic-fixture' })));
