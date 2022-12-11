import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__cog.scss';

const IconCog = (props: SingleIconProps) => (
    <Icon ico="cog" {...props}>
        <svg data-testid="icon__cog" viewBox="0 0 12 12">
            <path clipRule="evenodd" d="M4.47091 3.43724C4.05928 3.66538 3.55437 3.6621 3.14588 3.42863L3.12789 3.41107C2.94409 3.29949 2.88771 3.06354 3.00197 2.88406C3.11622 2.70457 3.35784 2.64952 3.54165 2.76109C3.62369 2.80784 3.71652 2.83352 3.81149 2.83575C3.95704 2.84169 4.09903 2.79087 4.20617 2.69448C4.31331 2.5981 4.3768 2.46406 4.38265 2.32191C4.37988 1.60772 4.96033 1.02142 5.69137 1H6.3075C7.05265 1 7.6567 1.58988 7.6567 2.31752C7.65549 2.41014 7.68038 2.5013 7.72866 2.58103C7.80029 2.70446 7.9195 2.7948 8.05972 2.83192C8.19995 2.86904 8.34955 2.84986 8.47522 2.77866C9.10833 2.44209 9.90054 2.65097 10.2741 3.25296C10.3774 3.43668 10.3139 3.66722 10.1302 3.77558C9.94358 3.87964 9.70599 3.8192 9.59505 3.63944C9.44263 3.38594 9.1095 3.29971 8.8485 3.4462C8.4355 3.66704 7.93449 3.66164 7.52658 3.43197C7.11867 3.2023 6.86288 2.78159 6.85168 2.32191C6.85656 2.17796 6.80138 2.03824 6.6988 1.93475C6.59621 1.83126 6.455 1.77287 6.3075 1.77295H5.69137C5.54348 1.7729 5.40184 1.83116 5.29855 1.93451C5.19526 2.03785 5.13906 2.17754 5.1427 2.32191C5.13853 2.78409 4.88253 3.20909 4.47091 3.43724ZM5.1427 9.69565C5.14517 9.98985 5.39009 10.2271 5.69137 10.2271L5.68687 10.2358C5.82666 10.2358 5.95583 10.3087 6.02572 10.4269C6.09561 10.5451 6.09561 10.6907 6.02572 10.809C5.95583 10.9272 5.82666 11 5.68687 11C4.94173 11 4.33767 10.4101 4.33767 9.68248C4.33889 9.58986 4.31399 9.4987 4.26572 9.41897C4.11482 9.16388 3.78133 9.0756 3.51916 9.22134C2.88605 9.55791 2.09384 9.34904 1.72023 8.74704L1.41441 8.22442C1.06975 7.60617 1.28365 6.83256 1.90012 6.46772C1.98183 6.42078 2.04993 6.35427 2.098 6.27448C2.1882 6.15172 2.22061 5.99726 2.18714 5.84975C2.15367 5.70223 2.05747 5.5756 1.92261 5.50154C1.30614 5.1367 1.09224 4.36309 1.4369 3.74484C1.49457 3.66018 1.58441 3.60146 1.68655 3.58168C1.78868 3.56189 1.89468 3.58268 1.98107 3.63944C2.15173 3.75276 2.20122 3.97697 2.09351 4.14888C1.94465 4.40358 2.03523 4.72788 2.29589 4.87352C2.49172 4.99071 2.65292 5.15569 2.76361 5.35222C3.10827 5.97047 2.89437 6.74408 2.2779 7.10892C2.01724 7.25455 1.92666 7.57885 2.07552 7.83355L2.38583 8.35617C2.45644 8.48071 2.57602 8.57173 2.71693 8.60821C2.85783 8.64468 3.00788 8.62344 3.13239 8.54941C3.33315 8.4357 3.56142 8.37656 3.7935 8.37813C4.53864 8.37813 5.1427 8.968 5.1427 9.69565ZM10.0943 6.46333C9.96862 6.39264 9.87707 6.27591 9.83991 6.13904C9.80276 6.00217 9.82309 5.85648 9.89637 5.7343C9.94444 5.65451 10.0125 5.588 10.0943 5.54106C10.2788 5.43278 10.3391 5.19923 10.2292 5.01845C10.1199 4.83999 9.8867 4.7763 9.69849 4.87352C9.08202 5.23835 8.86812 6.01197 9.21278 6.63022C9.32226 6.8462 9.49224 7.02743 9.70299 7.15283C9.82833 7.22267 9.9198 7.33862 9.95698 7.47478C9.99416 7.61093 9.97396 7.75596 9.90087 7.87747L9.59505 8.40009C9.52141 8.52239 9.40214 8.6121 9.26225 8.65042C9.12211 8.68692 8.97279 8.66632 8.8485 8.59332C8.43481 8.37216 7.93288 8.378 7.5247 8.60872C7.11652 8.83944 6.86134 9.26154 6.85168 9.722C6.87321 9.9184 7.04293 10.0673 7.2452 10.0673C7.44747 10.0673 7.61718 9.9184 7.63871 9.722C7.635 9.53013 7.73838 9.35144 7.90861 9.25554C8.07883 9.15964 8.28899 9.16168 8.45723 9.26087C9.09034 9.59743 9.88255 9.38856 10.2562 8.78656L10.562 8.26394C10.9396 7.64025 10.7307 6.83584 10.0943 6.46333ZM5.99719 4.35089C5.31284 4.3509 4.69595 4.7537 4.43449 5.37129C4.17302 5.98887 4.31852 6.69947 4.80307 7.17139C5.28763 7.64331 6.01569 7.7835 6.64743 7.52653C7.27916 7.26955 7.69001 6.66608 7.68819 5.9978C7.68819 5.56025 7.50989 5.14069 7.19263 4.83171C6.87538 4.52273 6.44526 4.34973 5.99719 4.35089ZM5.99719 6.88053C5.50043 6.88053 5.09772 6.48728 5.09772 6.00218C5.09772 5.51709 5.50043 5.12384 5.99719 5.12384C6.49395 5.12384 6.89666 5.51709 6.89666 6.00218C6.89666 6.48728 6.49395 6.88053 5.99719 6.88053Z" fillRule="evenodd" />
        </svg>
    </Icon>
);

export default IconCog;
