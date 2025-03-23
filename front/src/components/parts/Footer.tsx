import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <LogoContainer>
            <LogoText>Side Palette</LogoText>
            <StyledImage
              src="/images/side-palette.png"
              alt="Side Palette Logo"
              width={36}
              height={36}
            />
          </LogoContainer>
          <CompanyInfo>
            〒017-0867<br />
            千葉県松戸市北小金きよしガ丘5-5-1<br />
            TEL: 080-1699-0692
          </CompanyInfo>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Menu</FooterTitle>
          <FooterNav>
            <FooterLink href="/story">Story</FooterLink>
            <FooterLink href="/service">Service</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterNav>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Social</FooterTitle>
          <SocialLinks>
            <SocialLink href="https://www.tiktok.com/@mizuki.1998" target="_blank" rel="noopener noreferrer">
              TikTok
            </SocialLink>
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <FooterLinks>
          <SmallLink onClick={() => setShowPrivacyModal(true)}>プライバシーポリシー</SmallLink>
          <SmallLink onClick={() => setShowTermsModal(true)}>利用規約</SmallLink>
        </FooterLinks>
        <Copyright>© {currentYear} Side Palette</Copyright>
      </FooterBottom>

      {/* プライバシーポリシーモーダル */}
      <AnimatePresence>
        {showPrivacyModal && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPrivacyModal(false)}
          >
            <ModalContent
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <ModalTitle>プライバシーポリシー</ModalTitle>
              <ModalText>
                <ol>
                  <li>
                    <strong>事業者の名称</strong>
                    <p>[Side Palette]</p>
                  </li>

                  <li>
                    <strong>個人情報の定義</strong>
                    <p>本ポリシーにおいて、「個人情報」とは、生存する個人に関する情報であって、次のいずれかに該当するものをいいます。</p>
                    <ul>
                      <li>当該情報に含まれる氏名、電話番号、お問い合わせ内容等により特定の個人を識別できるもの</li>
                      <li>他の情報と容易に照合することができ、それにより特定の個人を識別できるもの</li>
                    </ul>
                  </li>

                  <li>
                    <strong>個人情報の取得方法</strong>
                    <p>当サイトでは、主にお客様がお問い合わせフォームにご入力いただくことにより、以下の個人情報を取得します。</p>
                    <ul>
                      <li>氏名</li>
                      <li>電話番号</li>
                      <li>お問い合わせ内容</li>
                    </ul>
                  </li>

                  <li>
                    <strong>個人情報の利用目的</strong>
                    <p>当サイトが取得したお客様の個人情報は、以下の目的のために利用します。</p>
                    <ul>
                      <li>お客様からのお問い合わせへの対応</li>
                      <li>お客様へのご連絡、業務上の確認、および情報提供</li>
                      <li>当サイトのサービスに関するご案内</li>
                      <li>その他、上記利用目的に付随する目的</li>
                    </ul>
                  </li>

                  <li>
                    <strong>個人情報の第三者提供</strong>
                    <p>当サイトは、以下の場合を除き、お客様の同意を得ることなく個人情報を第三者に提供することはありません。</p>
                    <ul>
                      <li>法令に基づく場合</li>
                      <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                      <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                      <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                    </ul>
                  </li>

                  <li>
                    <strong>個人情報の開示、訂正、削除請求</strong>
                    <p>お客様は、ご自身の個人情報について、開示、訂正、削除等の請求を行うことができます。ご希望される場合は、後記のお問い合わせ窓口までご連絡ください。ご請求いただいた際には、ご本人であることを確認させていただいた上で、法令に基づき適切に対応いたします。</p>
                  </li>

                  <li>
                    <strong>個人情報の安全管理措置</strong>
                    <p>当サイトは、お客様の個人情報を適切に管理するため、以下の安全管理措置を講じます。</p>
                    <ul>
                      <li>個人情報の漏洩、滅失、毀損等を防止するための合理的な技術的対策および組織的対策を実施します。</li>
                      <li>個人情報を取り扱う従業者に対して、適切な監督を行います。</li>
                      <li>取得した個人情報の保存期間を定め、期間経過後は適切に消去します。</li>
                    </ul>
                  </li>

                  <li>
                    <strong>Cookie（クッキー）その他の技術の利用</strong>
                    <p>当サイトでは、ウェブサイトの利便性向上やアクセス状況の分析等の目的で、Cookieその他の技術を利用する場合があります。Cookieの利用を希望されない場合は、お客様ご自身でブラウザの設定を変更することにより、Cookieの受け取りを拒否することができます。ただし、Cookieの受け取りを拒否した場合、当サイトの一部機能が利用できなくなる可能性があります。</p>
                  </li>

                  <li>
                    <strong>アクセスログの収集</strong>
                    <p>当サイトでは、ウェブサイトの利用状況を把握し、今後の改善に役立てるため、アクセスログを収集する場合があります。アクセスログには、お客様のIPアドレス、ブラウザの種類、アクセス日時などが含まれますが、個人を特定できる情報を含むものではありません。</p>
                  </li>

                  <li>
                    <strong>お問い合わせ窓口</strong>
                    <p>本ポリシーに関するお問い合わせ、ご意見、ご質問、および個人情報の開示、訂正、削除等のご請求につきましては、以下の窓口までご連絡ください。</p>
                    <p>[side.palette@gmail.com]</p>
                  </li>

                  <li>
                    <strong>プライバシーポリシーの変更</strong>
                    <p>当サイトは、法令の改正、社会情勢の変化、または当サイトのサービス内容の変更等に伴い、本ポリシーを予告なく変更することがあります。変更後の本ポリシーは、当サイト上に掲載した時点から効力を生じるものとします。</p>
                  </li>

                  <li>
                    <strong>準拠法</strong>
                    <p>本ポリシーの解釈および適用については、日本法を準拠法とします。</p>
                  </li>
                </ol>
              </ModalText>
              <CloseButton onClick={() => setShowPrivacyModal(false)}>閉じる</CloseButton>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>

      {/* 利用規約モーダル */}
      <AnimatePresence>
        {showTermsModal && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowTermsModal(false)}
          >
            <ModalContent
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <ModalTitle>利用規約</ModalTitle>
              <ModalText>
                <ol>
                  <li>
                    <strong>総則</strong>
                    <p>本規約は、[Side Palette]（以下「当方」といいます。）が運営するウェブサイト [side Palette web]（以下「本サイト」といいます。）の利用に関する条件を定めるものです。本サイトを利用される全ての方（以下「利用者」といいます。）は、本規約の内容を理解し、同意した上で本サイトをご利用ください。本サイトを利用された場合、利用者は本規約に同意したものとみなされます。</p>
                  </li>

                  <li>
                    <strong>禁止事項</strong>
                    <p>利用者は、本サイトの利用にあたり、以下の行為を行ってはならないものとします。</p>
                    <ul>
                      <li>法令または公序良俗に違反する行為</li>
                      <li>当方または第三者の著作権、商標権、その他の知的財産権を侵害する行為</li>
                      <li>当方または第三者の名誉または信用を毀損する行為</li>
                      <li>本サイトの運営を妨害する行為、またはそのおそれのある行為</li>
                      <li>虚偽の情報を登録または提供する行為</li>
                      <li>有害なプログラムやスクリプト等を送信または投稿する行為</li>
                      <li>その他、当方が不適切と判断する行為</li>
                    </ul>
                  </li>

                  <li>
                    <strong>著作権等</strong>
                    <p>本サイトに掲載されている全てのコンテンツ（文章、画像、デザイン、プログラム等）に関する著作権、商標権、その他の知的財産権は、当方または正当な権利を有する第三者に帰属します。利用者は、これらのコンテンツを無断で複製、転載、改変、頒布、公衆送信等を行うことはできません。</p>
                  </li>

                  <li>
                    <strong>免責事項</strong>
                    <p>当方は、本サイトに掲載する情報について、その正確性、完全性、最新性、有用性等についていかなる保証も行うものではありません。利用者は、本サイトの情報を自己の責任において利用するものとします。</p>
                    <ul>
                      <li>当方は、本サイトの利用または利用不能により利用者に生じた損害について、一切の責任を負わないものとします。</li>
                      <li>当方は、本サイトからリンクされている第三者のウェブサイトの内容について、一切の責任を負わないものとします。</li>
                      <li>当方は、本サイトの提供を予告なく中断または終了することがあります。これにより利用者に生じた損害について、当方は一切の責任を負わないものとします。</li>
                    </ul>
                  </li>

                  <li>
                    <strong>サービス内容の変更等</strong>
                    <p>当方は、利用者に事前に通知することなく、本サイトのサービス内容を変更、追加、または廃止することがあります。</p>
                  </li>

                  <li>
                    <strong>準拠法・裁判管轄</strong>
                    <p>本規約の解釈および適用については、日本法を準拠法とします。本サイトの利用に関する一切の紛争については、[あなたの住所地を管轄する裁判所]を第一審の専属的合意管轄裁判所とします。</p>
                  </li>

                  <li>
                    <strong>その他</strong>
                    <p>本規約に定めのない事項については、法令および慣習に従うものとします。</p>
                    <p>当方は、必要に応じて本規約の内容を随時変更することができるものとします。変更後の本規約は、本サイト上に掲載した時点から効力を生じるものとします。</p>
                  </li>

                  <li>
                    <strong>連絡先</strong>
                    <p>本規約に関するお問い合わせは、下記までご連絡ください。</p>
                    <p>[side.palette@gmail.com]</p>
                  </li>
                </ol>
              </ModalText>
              <CloseButton onClick={() => setShowTermsModal(false)}>閉じる</CloseButton>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  background: linear-gradient(120deg,
    #ff85ca 0%,
    #ff826a 15%,
    #ff9b60 25%,
    #ffaf80 35%,
    #c197ff 50%,
    #85eaff 65%,
     rgba(186, 220, 91, 0.9) 80%,
    #ffd96a 100%
  );
  margin-top: 60px;
  padding: 1rem 2rem 1rem;
  color: white;
  border-radius: 30px 30px 0 0 ;
  box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding-bottom: 1rem;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  grid-template-columns: 3fr 1fr 1fr;
  gap: 2rem ;
  @media (max-width: 768px) {
    grid-template-columns: 3fr 1fr 1fr;
    gap: 0.5rem;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin :0 0 0 2rem;

  @media (max-width: 768px) {
   margin :0;
    &:nth-child(2),
    &:nth-child(3) {
      text-align: reft;
      }
      }
      `;

  const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  `;

  const FooterNav = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    @media (max-width: 768px) {
      align-items: left;
    }
  `;
const StyledImage = styled(Image)`
  filter: brightness(0) invert(1);
`;

const LogoText = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  letter-spacing: -0.02em;
`;

const CompanyInfo = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.9;
  letter-spacing: 0.02em;
`;

const FooterTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.1rem;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
  margin-top : 0.3rem;
    align-items: left;
  }
`;


const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  width: fit-content;
  cursor: url("/images/hude.svg") 0 20, pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const SocialLinks = styled.div`  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  @media (max-width: 768px) {
    align-items: left;
  }
`;

const SocialLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  width: fit-content;
  cursor: url("/images/hude.svg") 0 20, pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 1rem auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const SmallLink = styled.button`
  color: white;
  font-size: 0.8rem;
  opacity: 0.8;
  transition: all 0.3s ease;
  background: none;
  border: none;
  cursor: url("/images/hude.svg") 0 20, pointer;

  &:hover {
    opacity: 1;
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled(motion.div)`
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  color: #333;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ff85ca;
    border-radius: 4px;
  }
`;

const ModalTitle = styled.h2`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 1.2rem;
  text-align: center;
  letter-spacing: -0.02em;
  font-weight: 600;
`;

const ModalText = styled.div`
  line-height: 1.4;
  margin-bottom: 2rem;
  font-size: 0.8rem;
  color: #666;

  ol {
    padding-left: 1.5rem;
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
    padding-left: 0.2rem;
  }

  ul {
    list-style-type: disc;
    padding-left: 1.2rem;

    li {
      padding-left: 0.2rem;

      &::marker {
        font-size: 0.5rem;
      }
    }
  }

  p {
    margin-bottom: 0.5rem;
  }
`;

const CloseButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 0.8rem 2.5rem;
  background: linear-gradient(120deg, #ff85ca, #85eaff);
  color: white;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: url("/images/hude.svg") 0 20, pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

export default Footer;

