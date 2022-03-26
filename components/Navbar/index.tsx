import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './index.module.scss';
import { navs } from './config';

const Navbar: NextPage = () => {
  const { pathname, push } = useRouter();
  console.log('pathname: ', pathname);

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
    </div>
  );
};

export default Navbar;
