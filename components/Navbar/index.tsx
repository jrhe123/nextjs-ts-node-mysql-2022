import { useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

//
import Login from 'components/Login';

//
import { Button } from 'antd';
import styles from './index.module.scss';
import { navs } from './config';

const Navbar: NextPage = () => {
  const { pathname, push } = useRouter();
  const [isShowLogin, setIsShowLogin] = useState(false);

  const handleGotoEditorPage = () => {};

  const handleLogin = () => {
    setIsShowLogin(true);
  };

  const handleClose = () => {
    setIsShowLogin(false);
  };

  return (
    <div className={styles.navbar}>
      <section className={styles.logoArea}>Blog-C</section>
      <section className={styles.linkArea}>
        {navs?.map((nav) => (
          <Link key={nav?.label} href={nav?.value}>
            <a className={pathname == nav?.value ? styles.active : ''}>
              {nav?.label}
            </a>
          </Link>
        ))}
      </section>
      <section className={styles.operationArea}>
        <Button onClick={handleGotoEditorPage}>Article</Button>
        <Button onClick={handleLogin} type="primary">
          Login
        </Button>
      </section>
      <Login isShow={isShowLogin} onClose={handleClose} />
    </div>
  );
};

export default Navbar;
