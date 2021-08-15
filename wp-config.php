<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'grabit' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ':0]w[w(~^J#xa@U(}*%69N%D[^/[}<Jvmod?CG{C%Ktd=Bkp;/6h$mNW7q;=_.6K' );
define( 'SECURE_AUTH_KEY',  'I{S-T9i3)bNzHkfB0zGR${*k(Ud8=BR zuG.,x9)Nsh moq^2!2p~qP[k{q&4a*,' );
define( 'LOGGED_IN_KEY',    'qu{4^D[2=r7kg_ND+LLpl4` 6hF=ZdD0Rbdi+|nd9e*)<RhVzd4haY!q]cNx-8Y~' );
define( 'NONCE_KEY',        '?q~4bxFs0k8h+;1E#ycD]L#w mm{2vML!@?`J3$!Q-snrWS2S?Y&fBWN%;e!*j75' );
define( 'AUTH_SALT',        'qt;^~pp4,NHY(7l,m&b2F[_qieKK{lCb3}G0ZRk&*lR(kfFJBaR99ZOYUqJ@Vfd6' );
define( 'SECURE_AUTH_SALT', 'z5x@(#UT$SI*l~Jj.A~?# YYW<+^1s-ja5MZTA;c3t Da%DP+=zvHiFQho?gK`IH' );
define( 'LOGGED_IN_SALT',   'sA(I+K~SR-Pb2;8okyA!iY(DuWg2|8t:{0)DG3OIEs;=se(?X/9zu!FSIgA?GG)O' );
define( 'NONCE_SALT',       '$6v)[]z=b~sPEw(5yQLNCiX0rY/q<6#7]RkK<4AgkWr:^>])7Mw^^}>BFzEun#`*' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wordPress';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
