import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,a,b as e,o as c}from"./app-BubkLP4g.js";const n="/guide/assets/cache-CbudQwJE.png",i={};function r(l,t){return c(),s("div",null,[a(" ## Cache Settings "),t[0]||(t[0]=e("h2",{id:"캐시-설정",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#캐시-설정"},[e("span",null,"캐시 설정")])],-1)),a(" ![Cache Settings](cache.png) "),t[1]||(t[1]=e("figure",null,[e("img",{src:n,alt:"캐시 설정",tabindex:"0",loading:"lazy"}),e("figcaption",null,"캐시 설정")],-1)),a(` Disk cache supports two-level cache. The first-level cache uses memory as cache, and the second-level cache uses local SSD disk as cache.
The first-level cache is mandatory. Please set the memory size to use.
The second-level cache is optional. Please set the SSD disk location and limit size to store the cache files.
The cache methods are cache read (cache the data read from the disk) and cache write (cache the data written to the disk, and delay writing to the disk).
Note: Caching writes to the system disk (C drive) will cause data loss and system damage when shutting down. Please set it carefully.
Recommended settings:
Image Disk: The disk that stores the system image files. It is recommended to only cache reads, and allocate at least 512MB of memory cache for each image.
Data Disk: The disk that stores a large amount of data. It is recommended to only cache reads, and allocate the maximum amount of memory cache and second-level cache.
Write-back Disk: The disk where the write-back data is stored. It is recommended to only cache writes, and allocate a small amount of memory cache. `),t[2]||(t[2]=e("p",null,"디스크 캐시는 2단계 캐시를 지원합니다. 첫 번째 수준 캐시는 메모리를 캐시로 사용하고, 두 번째 수준 캐시는 로컬 SSD 디스크를 캐시로 사용합니다. 첫 번째 수준 캐시는 필수입니다. 사용할 메모리 크기를 설정해주세요. 두 번째 수준 캐시는 선택 사항입니다. 캐시 파일을 저장할 SSD 디스크 위치와 크기 제한을 설정하세요. 캐시 방법에는 캐시 읽기(디스크에서 읽은 데이터를 캐시)와 캐시 쓰기(디스크에 쓴 데이터를 캐시하고 디스크에 쓰기를 지연)가 있습니다. 참고: 시스템 디스크(C 드라이브)에 쓰기를 캐시하면 종료 시 데이터가 손실되고 시스템이 손상될 수 있습니다. 신중하게 설정해 주세요. 권장 설정: 이미지 디스크: 시스템 이미지 파일을 저장하는 디스크입니다. 읽기만 캐시하고 각 이미지에 최소 512MB의 메모리 캐시를 할당하는 것이 좋습니다. 데이터 디스크: 많은 양의 데이터를 저장하는 디스크입니다. 읽기만 캐시하고 메모리 캐시와 2차 캐시를 최대로 할당하는 것이 좋습니다. 후기입 디스크: 후기입 데이터가 저장되는 디스크입니다. 캐시 쓰기만 하고, 소량의 메모리 캐시를 할당하는 것이 좋습니다.",-1))])}const m=o(i,[["render",r],["__file","cache.html.vue"]]),p=JSON.parse('{"path":"/guide/web/cache.html","title":"캐시 관리","lang":"en-US","frontmatter":{"title":"캐시 관리","icon":"fa-solid fa-arrows-rotate","order":5,"category":"웹 UI","tag":"Cache Management","description":"캐시 설정 캐시 설정캐시 설정 디스크 캐시는 2단계 캐시를 지원합니다. 첫 번째 수준 캐시는 메모리를 캐시로 사용하고, 두 번째 수준 캐시는 로컬 SSD 디스크를 캐시로 사용합니다. 첫 번째 수준 캐시는 필수입니다. 사용할 메모리 크기를 설정해주세요. 두 번째 수준 캐시는 선택 사항입니다. 캐시 파일을 저장할 SSD...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/guide/guide/web/cache.html"}],["meta",{"property":"og:site_name","content":"Cloud-i Admin Manual"}],["meta",{"property":"og:title","content":"캐시 관리"}],["meta",{"property":"og:description","content":"캐시 설정 캐시 설정캐시 설정 디스크 캐시는 2단계 캐시를 지원합니다. 첫 번째 수준 캐시는 메모리를 캐시로 사용하고, 두 번째 수준 캐시는 로컬 SSD 디스크를 캐시로 사용합니다. 첫 번째 수준 캐시는 필수입니다. 사용할 메모리 크기를 설정해주세요. 두 번째 수준 캐시는 선택 사항입니다. 캐시 파일을 저장할 SSD..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Cloud-i Desktop"}],["meta",{"property":"article:tag","content":"Cache Management"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"캐시 관리\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cloud-i Desktop\\",\\"url\\":\\"https://gway-tech.github.io/guide/\\"}]}"]]},"headers":[{"level":2,"title":"캐시 설정","slug":"캐시-설정","link":"#캐시-설정","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.8,"words":239},"filePathRelative":"guide/web/cache.md","autoDesc":true}');export{m as comp,p as data};
