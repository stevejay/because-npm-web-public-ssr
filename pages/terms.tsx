import React from "react";
import { EMAIL, WEBSITE } from "../src/shared/constants";
import { LegalPageContainer } from "../src/shared/page";

const TermsPage = () => (
  <LegalPageContainer>
    <h1>Terms and Conditions</h1>
    <p>Last updated: September 14, 2018</p>
    <p>
      Please read these Terms and Conditions ("Terms", "Terms and Conditions")
      carefully before using the {WEBSITE} website (the "Service") operated by
      Middle Engine Software Ltd ("us", "we", or "our").
    </p>
    <p>
      Your access to and use of the Service is conditioned on your acceptance of
      and compliance with these Terms. These Terms apply to all visitors, users
      and others who access or use the Service.
    </p>
    <p>
      By accessing or using the Service you agree to be bound by these Terms. If
      you disagree with any part of the terms then you may not access the
      Service.
    </p>
    <h2>Links To Other Web Sites</h2>
    <p>
      Our Service may contain links to third-party web sites or services that
      are not owned or controlled by Middle Engine Software Ltd.
    </p>
    <p>
      Middle Engine Software Ltd has no control over, and assumes no
      responsibility for, the content, privacy policies, or practices of any
      third party web sites or services. You further acknowledge and agree that
      Middle Engine Software Ltd shall not be responsible or liable, directly or
      indirectly, for any damage or loss caused or alleged to be caused by or in
      connection with use of or reliance on any such content, goods or services
      available on or through any such web sites or services.
    </p>
    <p>
      We strongly advise you to read the terms and conditions and privacy
      policies of any third-party web sites or services that you visit.
    </p>
    <h2>Indemnification</h2>
    <p>
      You agree to defend, indemnify and hold harmless Middle Engine Software
      Ltd and its licensee and licensors, and their employees, contractors,
      agents, officers and directors, from and against any and all claims,
      damages, obligations, losses, liabilities, costs or debt, and expenses
      (including but not limited to attorney's fees), resulting from or arising
      out of a) your use and access of the Service, or b) a breach of these
      Terms.
    </p>
    <h2>Limitation Of Liability</h2>
    <p>
      In no event shall Middle Engine Software Ltd, nor its directors,
      employees, partners, agents, suppliers, or affiliates, be liable for any
      indirect, incidental, special, consequential or punitive damages,
      including without limitation, loss of profits, data, use, goodwill, or
      other intangible losses, resulting from (i) your access to or use of or
      inability to access or use the Service; (ii) any conduct or content of any
      third party on the Service; (iii) any content obtained from the Service;
      and (iv) unauthorized access, use or alteration of your transmissions or
      content, whether based on warranty, contract, tort (including negligence)
      or any other legal theory, whether or not we have been informed of the
      possibility of such damage, and even if a remedy set forth herein is found
      to have failed of its essential purpose.
    </p>
    <h2>Disclaimer</h2>
    <p>
      Your use of the Service is at your sole risk. The Service is provided on
      an "AS IS" and "AS AVAILABLE" basis. The Service is provided without
      warranties of any kind, whether express or implied, including, but not
      limited to, implied warranties of merchantability, fitness for a
      particular purpose, non-infringement or course of performance.
    </p>
    <p>
      Middle Engine Software Ltd its subsidiaries, affiliates, and its licensors
      do not warrant that a) the Service will function uninterrupted, secure or
      available at any particular time or location; b) any errors or defects
      will be corrected; c) the Service is free of viruses or other harmful
      components; or d) the results of using the Service will meet your
      requirements.
    </p>
    <h2>Exclusions</h2>
    <p>
      Without limiting the generality of the foregoing and notwithstanding any
      other provision of these terms, under no circumstances will Middle Engine
      Software Ltd ever be liable to you or any other person for any indirect,
      incidental, consequential, special, punitive or exemplary loss or damage
      arising from, connected with, or relating to your use of the Service,
      these Terms, the subject matter of these Terms, the termination of these
      Terms or otherwise, including but not limited to personal injury, loss of
      data, business, markets, savings, income, profits, use, production,
      reputation or goodwill, anticipated or otherwise, or economic loss, under
      any theory of liability (whether in contract, tort, strict liability or
      any other theory or law or equity), regardless of any negligence or other
      fault or wrongdoing (including without limitation gross negligence and
      fundamental breach) by Middle Engine Software Ltd or any person for whom
      Middle Engine Software Ltd is responsible, and even if Middle Engine
      Software Ltd has been advised of the possibility of such loss or damage
      being incurred.
    </p>
    <h2>Governing Law</h2>
    <p>
      These Terms shall be governed and construed in accordance with the laws of
      England and Wales, without regard to its conflict of law provisions.
    </p>
    <p>
      Our failure to enforce any right or provision of these Terms will not be
      considered a waiver of those rights. If any provision of these Terms is
      held to be invalid or unenforceable by a court, the remaining provisions
      of these Terms will remain in effect. These Terms constitute the entire
      agreement between us regarding our Service, and supersede and replace any
      prior agreements we might have between us regarding the Service.
    </p>
    <h2>Changes</h2>
    <p>
      We reserve the right, at our sole discretion, to modify or replace these
      Terms at any time. If a revision is material we will try to provide at
      least 30 days notice prior to any new terms taking effect. What
      constitutes a material change will be determined at our sole discretion.
    </p>
    <p>
      By continuing to access or use our Service after those revisions become
      effective, you agree to be bound by the revised terms. If you do not agree
      to the new terms, you must stop using the service.
    </p>
    <h2>Privacy Policy and Cookie Policy</h2>
    <p>
      Please refer to our Privacy Policy and Cookies Policy. You agree that they
      constitute part of these terms. You must read our Privacy Policy and
      Cookies Policy before you use the Service.
    </p>
    <h2>Contact Us</h2>
    <p>
      If you have any questions about these Terms, please contact us at{" "}
      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
    </p>
  </LegalPageContainer>
);

export default TermsPage;
