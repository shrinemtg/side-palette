import React from 'react'
import Image from 'next/image'

const LineQrPage: React.FC = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          background: '#fff',
          borderRadius: '24px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          padding: '2.5rem 2rem 2.5rem 2rem',
          maxWidth: 360,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '2px solid #06C755',
          position: 'relative',
        }}
      >
        {/* LINEロゴとショップ名 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1.2rem' }}>
          <Image src='https://img.icons8.com/color/48/000000/line-me.png' width={36} height={36} alt='LINEロゴ' />
          <span style={{ fontWeight: 700, fontSize: '1.3rem', color: '#06C755', letterSpacing: '0.05em' }}>
            Side Palette 公式LINE
          </span>
        </div>
        {/* QRコード */}
        <div
          style={{
            background: '#fff',
            borderRadius: '16px',
            border: '1.5px solid #e0e0e0',
            padding: '1.2rem',
            marginBottom: '1.5rem',
            boxShadow: '0 2px 8px rgba(6,199,85,0.08)',
          }}
        >
          <Image
            src='/images/M_gainfriends_2dbarcodes_GW.png'
            alt='LINE公式QRコード'
            width={180}
            height={180}
            style={{ display: 'block' }}
          />
        </div>
        {/* キャッチコピー */}
        <div
          style={{ color: '#333', fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.7rem', textAlign: 'center' }}
        >
          友だち追加で
          <br />
          いつでも気軽にご相談！
        </div>
        {/* 説明文 */}
        <div
          style={{ color: '#666', fontSize: '0.98rem', textAlign: 'center', marginBottom: '1.2rem', lineHeight: 1.7 }}
        >
          LINEアプリの「友だち追加」から
          <br />
          このQRコードをスキャンしてください。
          <br />
          <span style={{ color: '#06C755', fontWeight: 500 }}>お得な情報も配信中！</span>
        </div>
        {/* フッター */}
        <div style={{ fontSize: '0.85rem', color: '#aaa', textAlign: 'center', marginTop: '0.5rem' }}>
          © Side Palette
        </div>
      </div>
    </div>
  )
}

export default LineQrPage
