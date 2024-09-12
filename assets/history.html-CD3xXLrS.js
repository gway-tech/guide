import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,f as i,o as r}from"./app-BCwBI7cb.js";const o={};function n(s,e){return r(),a("div",null,e[0]||(e[0]=[i('<h2 id="upgrade-log-2023-9-14" tabindex="-1"><a class="header-anchor" href="#upgrade-log-2023-9-14"><span>Upgrade Log (2023.9.14)</span></a></h2><p>The web interface has added a lot of templates, which can batch set the properties of computers The local boot interface has added a graphical boot interface</p><h2 id="fix-log-2023-6-15" tabindex="-1"><a class="header-anchor" href="#fix-log-2023-6-15"><span>Fix Log (2023.6.15)</span></a></h2><p>Fixed the access denied and read-only access functions of USB 3.0 flash drive</p><h2 id="fix-log-2023-05-18" tabindex="-1"><a class="header-anchor" href="#fix-log-2023-05-18"><span>Fix Log (2023.05.18)</span></a></h2><p>Fixed the disk cache module, server-side secondary file cache and client-side write-back secondary file cache slow write speed bug.</p><h2 id="fix-log-2023-04-10" tabindex="-1"><a class="header-anchor" href="#fix-log-2023-04-10"><span>Fix Log (2023.04.10)</span></a></h2><p>Fixed the bug that Windows 10 22h2 and above cannot boot without disk and network card pnp Fixed the bug that network wake-up must enable DHCP module.</p><h2 id="upgrade-log-2023-3-16" tabindex="-1"><a class="header-anchor" href="#upgrade-log-2023-3-16"><span>Upgrade Log (2023.3.16)</span></a></h2><p>Added the function of restoring and verifying child.vhd in restore mode when booting locally from vhd, avoiding the possibility of VHD_BOOT_INITIALIZATION_FAILED blue screen.</p><h2 id="fix-log-2023-2-21" tabindex="-1"><a class="header-anchor" href="#fix-log-2023-2-21"><span>Fix Log (2023.2.21)</span></a></h2><p>Fixed the bug that the local disk drive letter cannot be fixed when plugging in a USB flash drive when the client boots locally.</p><h2 id="fix-log-2023-2-14" tabindex="-1"><a class="header-anchor" href="#fix-log-2023-2-14"><span>Fix Log (2023.2.14)</span></a></h2><p>Fixed the bug that the icon in the notification area at the bottom right corner of the desktop becomes transparent in restore mode when booting locally. (Personal profile transfer function needs to be enabled)</p><h2 id="function-addition-log-2023-2-6" tabindex="-1"><a class="header-anchor" href="#function-addition-log-2023-2-6"><span>Function Addition Log (2023.2.6)</span></a></h2><p>Added UEFI PXE boot mode PURE, which supports Intel® B660 and above pure UEFI BIOS, without CSM (Compatibility Support Module).</p><h2 id="upgrade-log-2023-1-30" tabindex="-1"><a class="header-anchor" href="#upgrade-log-2023-1-30"><span>Upgrade Log (2023.1.30)</span></a></h2><p>Added custom client desktop watermark function. (Set from web interface, need to update)</p><h2 id="upgrade-fix-log-2023-1-28" tabindex="-1"><a class="header-anchor" href="#upgrade-fix-log-2023-1-28"><span>Upgrade Fix Log (2023.1.28)</span></a></h2><ol><li>Fixed the problem of network disconnection caused by network card resetting continuously 10 minutes before offline boot.</li><li>Fixed the bug that the client cannot replace the boot when merging and upgrading without version number image (first deployment).</li><li>Fixed the bug that after modifying the computer name of the local boot client from the server side, it will automatically restore when restarting and shutting down.</li></ol><h2 id="v1-8-feature-list-release-date-2017-7" tabindex="-1"><a class="header-anchor" href="#v1-8-feature-list-release-date-2017-7"><span>V1.8 Feature List: (Release Date: 2017.7)</span></a></h2><p>Added support for Windows 10 diskless boot. Added support for UEFI BIOS diskless boot. Added VHD offline boot function. Added non-restore system image, retention mode. Added support for PXE network boot in domain environment. Roaming personal disk can be system disk and boot without disk, added roaming personal restore point. Added shared cloud disk and iSCSI cloud disk.</p><h2 id="v1-7-feature-list-release-date-2014-9-8" tabindex="-1"><a class="header-anchor" href="#v1-7-feature-list-release-date-2014-9-8"><span>V1.7 Feature List: (Release Date: 2014.9.8)</span></a></h2><p>Added Ubuntu diskless boot and server-side linux version. Added roaming personal disk function, allowing roaming personal disk by login name. Optimized memory cache allocation startup speed, client write-back cache zero write-back. Added various boot modes such as client boot menu</p><h2 id="v1-6-feature-list-release-date-2013-10-1" tabindex="-1"><a class="header-anchor" href="#v1-6-feature-list-release-date-2013-10-1"><span>V1.6 Feature List: (Release Date: 2013-10-1)</span></a></h2><p>Server-side added multi-server management and image synchronization function. Supports diskless boot of client linux system Added client write-back file size limit function</p><h2 id="v1-5-feature-list-release-date-2013-3-1" tabindex="-1"><a class="header-anchor" href="#v1-5-feature-list-release-date-2013-3-1"><span>V1.5 Feature List: (Release Date: 2013-3-1)</span></a></h2><p>Server-side updated disk cache module, faster speed, higher efficiency, and can serve other menu update programs. Server-side added custom DHCP binding IP, gateway and other parameters for each client Added client disk cache.</p><h2 id="v1-4-feature-list-release-date-2012-9-18" tabindex="-1"><a class="header-anchor" href="#v1-4-feature-list-release-date-2012-9-18"><span>V1.4 Feature List: (Release Date: 2012-9-18)</span></a></h2><p>Added server load balancing and dual-server hot backup function. When one server fails to stop service, another server can take over immediately without restarting the client. Added super user update data disk function. Super users can directly update data disks without saving write-back data. Used for installing a large number of software on clients, etc.</p><h2 id="v1-3-feature-list-release-date-2012-6-30" tabindex="-1"><a class="header-anchor" href="#v1-3-feature-list-release-date-2012-6-30"><span>V1.3 Feature List: (Release Date: 2012-6-30)</span></a></h2><p>Optimized network card PNP driver during client startup, increased adaptability to various hardware environments, and accelerated operating system startup speed. Optimized server read-write cache algorithm, changed from original per-disk and per-user allocation to unified allocation and scheduling, which improved speed and increased cache utilization efficiency. And added timed refresh cache function to make up for the shortcomings of manual refresh cache. Added one-to-many configuration and restore point function, which can be more flexible when there are more client hardware configurations. And each time data is saved, a restore point can be created, confirm that the saved data is correct, and then merge it into the base disk, greatly improving security. Redesigned a new write-back file format to replace the original vhd format that is not suitable for write-back, greatly reducing the server write-back pressure, improving the client response speed and overall load capacity. Added batch add user and import user functions, which is convenient for creating a large number of user information when deploying diskless for the first time. Added disable PXE network boot and use compatible PXE boot mode, which is convenient for deploying multiple servers in the same LAN and compatible with old network cards (non-PXE2.1 mode). Added multiple system simultaneous boot function, more suitable for complex application environment.</p><h2 id="v1-2-feature-list-release-date-2012-1-13" tabindex="-1"><a class="header-anchor" href="#v1-2-feature-list-release-date-2012-1-13"><span>V1.2 Feature List: (Release Date: 2012-1-13)</span></a></h2><p>Added support for multiple write-back directories, the system automatically assigns user write-back to each write-back directory, reducing the requirements of the system write-back disk. The server can achieve the effect of disk array through multiple write-back disks.</p><h2 id="v1-1-feature-list-release-date-2011-10-18" tabindex="-1"><a class="header-anchor" href="#v1-1-feature-list-release-date-2011-10-18"><span>V1.1 Feature List: (Release Date: 2011-10-18)</span></a></h2><p>Added DHCP, TFTP, PXE, iPXE and image upload functions to realize a one-stop solution for diskless boot based on iSCSI protocol. The client added network card PNP tool and system image upload tool. Added remote boot (requires network card support) and adding client by scanning LAN function. Added manual refresh server cache function, which is convenient for manually forcing refresh when automatic update cache fails. Added separate start and stop function for a virtual disk. Added server disk and client disk drive letter correspondence function, by customizing the drive letter of the client virtual disk, it is convenient to uniformly manage the game software path. Added support for IMG and VDI disk formats, supporting five kinds of virtual disk formats.</p><h2 id="v1-0-feature-list-release-date-2011-6-22" tabindex="-1"><a class="header-anchor" href="#v1-0-feature-list-release-date-2011-6-22"><span>V1.0 Feature List: (Release Date: 2011-6-22)</span></a></h2><p>The system fully implements the Target (targeter) function of the iSCSI protocol, which can cooperate with the Windows full series operating system to present the hard disk or partition on the server as a virtual disk on the client. The client can perform any read and write operations on the virtual disk, run program software, format and partition operations. The client reloads the virtual disk and restores to the state of the server disk.</p>',38)]))}const c=t(o,[["render",n],["__file","history.html.vue"]]),h=JSON.parse('{"path":"/guide/reference/history.html","title":"Version 업데이트 내역","lang":"en-US","frontmatter":{"title":"Version 업데이트 내역","icon":"fa-solid fa-timeline","order":9,"category":["참고사항"],"tag":["Version History"],"description":"Upgrade Log (2023.9.14) The web interface has added a lot of templates, which can batch set the properties of computers The local boot interface has added a graphical boot inter...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/guide/guide/reference/history.html"}],["meta",{"property":"og:site_name","content":"Cloud-i Admin Manual"}],["meta",{"property":"og:title","content":"Version 업데이트 내역"}],["meta",{"property":"og:description","content":"Upgrade Log (2023.9.14) The web interface has added a lot of templates, which can batch set the properties of computers The local boot interface has added a graphical boot inter..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Cloud-i Desktop"}],["meta",{"property":"article:tag","content":"Version History"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Version 업데이트 내역\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cloud-i Desktop\\",\\"url\\":\\"https://gway-tech.github.io/guide/\\"}]}"]]},"headers":[{"level":2,"title":"Upgrade Log (2023.9.14)","slug":"upgrade-log-2023-9-14","link":"#upgrade-log-2023-9-14","children":[]},{"level":2,"title":"Fix Log (2023.6.15)","slug":"fix-log-2023-6-15","link":"#fix-log-2023-6-15","children":[]},{"level":2,"title":"Fix Log (2023.05.18)","slug":"fix-log-2023-05-18","link":"#fix-log-2023-05-18","children":[]},{"level":2,"title":"Fix Log (2023.04.10)","slug":"fix-log-2023-04-10","link":"#fix-log-2023-04-10","children":[]},{"level":2,"title":"Upgrade Log (2023.3.16)","slug":"upgrade-log-2023-3-16","link":"#upgrade-log-2023-3-16","children":[]},{"level":2,"title":"Fix Log (2023.2.21)","slug":"fix-log-2023-2-21","link":"#fix-log-2023-2-21","children":[]},{"level":2,"title":"Fix Log (2023.2.14)","slug":"fix-log-2023-2-14","link":"#fix-log-2023-2-14","children":[]},{"level":2,"title":"Function Addition Log (2023.2.6)","slug":"function-addition-log-2023-2-6","link":"#function-addition-log-2023-2-6","children":[]},{"level":2,"title":"Upgrade Log (2023.1.30)","slug":"upgrade-log-2023-1-30","link":"#upgrade-log-2023-1-30","children":[]},{"level":2,"title":"Upgrade Fix Log (2023.1.28)","slug":"upgrade-fix-log-2023-1-28","link":"#upgrade-fix-log-2023-1-28","children":[]},{"level":2,"title":"V1.8 Feature List: (Release Date: 2017.7)","slug":"v1-8-feature-list-release-date-2017-7","link":"#v1-8-feature-list-release-date-2017-7","children":[]},{"level":2,"title":"V1.7 Feature List: (Release Date: 2014.9.8)","slug":"v1-7-feature-list-release-date-2014-9-8","link":"#v1-7-feature-list-release-date-2014-9-8","children":[]},{"level":2,"title":"V1.6 Feature List: (Release Date: 2013-10-1)","slug":"v1-6-feature-list-release-date-2013-10-1","link":"#v1-6-feature-list-release-date-2013-10-1","children":[]},{"level":2,"title":"V1.5 Feature List: (Release Date: 2013-3-1)","slug":"v1-5-feature-list-release-date-2013-3-1","link":"#v1-5-feature-list-release-date-2013-3-1","children":[]},{"level":2,"title":"V1.4 Feature List: (Release Date: 2012-9-18)","slug":"v1-4-feature-list-release-date-2012-9-18","link":"#v1-4-feature-list-release-date-2012-9-18","children":[]},{"level":2,"title":"V1.3 Feature List: (Release Date: 2012-6-30)","slug":"v1-3-feature-list-release-date-2012-6-30","link":"#v1-3-feature-list-release-date-2012-6-30","children":[]},{"level":2,"title":"V1.2 Feature List: (Release Date: 2012-1-13)","slug":"v1-2-feature-list-release-date-2012-1-13","link":"#v1-2-feature-list-release-date-2012-1-13","children":[]},{"level":2,"title":"V1.1 Feature List: (Release Date: 2011-10-18)","slug":"v1-1-feature-list-release-date-2011-10-18","link":"#v1-1-feature-list-release-date-2011-10-18","children":[]},{"level":2,"title":"V1.0 Feature List: (Release Date: 2011-6-22)","slug":"v1-0-feature-list-release-date-2011-6-22","link":"#v1-0-feature-list-release-date-2011-6-22","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.55,"words":1064},"filePathRelative":"guide/reference/history.md","autoDesc":true}');export{c as comp,h as data};
