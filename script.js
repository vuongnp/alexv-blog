// Sử dụng IIFE (Immediately Invoked Function Expression) để tạo scope riêng
(function() {
    // Các biến sẽ được khai báo trong scope của hàm này
    var allBlogPosts = [];
    var currentPage = 1; 
    var blogsPerPage = 5;

    // Khai báo các biến DOM elements
    var aboutSection;
    var blogsSection;
    var blogPostSection;
    var postContent;
    var aboutLink;
    var blogsLink;
    var blogDataLoaded = false;

    // Thêm biến để theo dõi trạng thái
    var isNavigatingBlog = false;

    document.addEventListener('DOMContentLoaded', function() {
        console.log("DOM fully loaded");
        
        // Lưu trữ tham chiếu đến các phần tử DOM
        aboutLink = document.getElementById('about-link');
        blogsLink = document.getElementById('blogs-link');
        const backToBlogsBtn = document.getElementById('back-to-blogs');
        
        aboutSection = document.getElementById('about-me');
        blogsSection = document.getElementById('blogs');
        blogPostSection = document.getElementById('blog-post');
        
        // Post content container
        postContent = document.getElementById('post-content');

        // Tải danh sách bài viết ngay khi DOM được tải
        loadBlogListData().then(() => {
            // Sau khi danh sách bài viết được tải, kiểm tra URL hash
            checkUrlHash();
        });
        
        // Listen for hash changes
        window.addEventListener('hashchange', function() {
            console.log("Hash changed to:", window.location.hash);
            checkUrlHash();
        });
        
        // Navigation handlers
        aboutLink.addEventListener('click', function(e) {
            e.preventDefault();
            console.log("About link clicked");
            window.location.hash = '';
        });
        
        blogsLink.addEventListener('click', function(e) {
            e.preventDefault();
            console.log("Blogs link clicked");
            window.location.hash = '#blogs';
        });
        
        backToBlogsBtn.addEventListener('click', function() {
            console.log("Back to blogs button clicked");
            window.location.hash = '#blogs';
        });
    });

    // Hàm tải dữ liệu blog từ JSON (Promise-based)
    function loadBlogListData() {
        console.log("Loading blog list data");
        
        return new Promise((resolve, reject) => {
            if (blogDataLoaded && allBlogPosts.length > 0) {
                console.log("Blog data already loaded, using cached data");
                resolve();
                return;
            }
            
            fetch('blog-data.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Không thể tải danh sách bài viết');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("Blog data loaded successfully:", data);
                    
                    if (data.blogs && data.blogs.length > 0) {
                        allBlogPosts = data.blogs;
                        blogDataLoaded = true;
                        resolve();
                    } else {
                        console.warn("No blogs found in data");
                        allBlogPosts = [];
                        blogDataLoaded = true;
                        resolve();
                    }
                })
                .catch(error => {
                    console.error('Error loading blog list:', error);
                    reject(error);
                });
        });
    }

    function showSection(section) {
        console.log("Showing section:", section.id);
        
        // Hide all sections
        aboutSection.classList.remove('active-section');
        aboutSection.classList.add('hidden-section');
        
        blogsSection.classList.remove('active-section');
        blogsSection.classList.add('hidden-section');
        
        blogPostSection.classList.remove('active-section');
        blogPostSection.classList.add('hidden-section');
        
        // Show the selected section
        section.classList.remove('hidden-section');
        section.classList.add('active-section');
        console.log("Section activated:", section.id);
    }

    function setActiveLink(link) {
        aboutLink.classList.remove('active');
        blogsLink.classList.remove('active');
        link.classList.add('active');
    }

    // Function to format date
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('vi-VN', options);
    }

    function generateFakeViews(blogId) {
        // Sử dụng ID blog làm seed cho số lượt xem cơ bản
        const blogSeed = blogId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        
        // Lấy ngày hiện tại
        const today = new Date();
        const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
        
        // Tính số lượt xem dựa trên ID blog, ngày trong năm và năm
        const baseViews = 100 + (blogSeed % 300); // 100-400 lượt xem cơ bản
        const timeBonus = dayOfYear + ((today.getFullYear() - 2023) * 365); // Thêm lượt xem theo thời gian
        
        // Thêm yếu tố ngẫu nhiên nhỏ để tạo sự đa dạng
        const randomFactor = Math.floor(Math.random() * 50);
        
        // Tổng số lượt xem
        const totalViews = baseViews + timeBonus + randomFactor;
        
        // Format số với dấu phân cách hàng nghìn
        return totalViews.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function loadBlogList() {
        console.log("Loading blog list UI");
        
        const blogList = document.getElementById('blog-list');
        if (!blogList) {
            console.error("Blog list container not found!");
            return;
        }
        
        blogList.innerHTML = '<div class="loading">Đang tải bài viết...</div>';

        if (!blogDataLoaded) {
            // Tải dữ liệu nếu chưa tải
            loadBlogListData()
                .then(() => displayBlogList(blogList))
                .catch(error => {
                    blogList.innerHTML = `<p>Có lỗi xảy ra: ${error.message}</p>`;
                });
        } else {
            // Sử dụng dữ liệu đã tải
            displayBlogList(blogList);
        }
    }
    
    function displayBlogList(blogList) {
        console.log("Displaying blog list");
        
        if (!allBlogPosts || allBlogPosts.length === 0) {
            blogList.innerHTML = '<p>Chưa có bài viết nào.</p>';
            return;
        }

        // Clear loading indicator
        blogList.innerHTML = '';

        // Danh sách các bài viết nổi bật (chỉ định bằng ID)
        const featuredIds = ["Blog0_Example", "Blog2_108PromptsChatGPT", "Blog1_ImageTrend"];
        const featuredBlogs = allBlogPosts.filter(blog => featuredIds.includes(blog.id));

        // Hiển thị các bài viết nổi bật
        if (featuredBlogs.length > 0) {
            const featuredSection = document.createElement('div');
            featuredSection.className = 'featured-blogs';
            featuredSection.innerHTML = '<h3>Bài viết nổi bật</h3>';
            featuredBlogs.forEach(blog => {
                const blogCard = createBlogCard(blog);
                featuredSection.appendChild(blogCard);
            });
            blogList.appendChild(featuredSection);
        }

        // Tạo container cho phần "Tất cả bài viết" nếu chưa có
        let allBlogsSection = document.querySelector('.all-blogs');
        if (!allBlogsSection) {
            allBlogsSection = document.createElement('div');
            allBlogsSection.className = 'all-blogs';
            allBlogsSection.innerHTML = '<h3>Tất cả bài viết</h3>';
            
            const allBlogsContainer = document.createElement('div');
            allBlogsContainer.id = 'all-blogs-container';
            allBlogsSection.appendChild(allBlogsContainer);
            
            const paginationContainer = document.createElement('div');
            paginationContainer.id = 'pagination';
            paginationContainer.className = 'pagination';
            allBlogsSection.appendChild(paginationContainer);
            
            blogList.appendChild(allBlogsSection);
        }

        // Gọi hàm hiển thị mục "Tất cả bài viết" mới
        loadAllBlogs();
    }

    function createBlogCard(blog) {
        console.log("Creating blog card for:", blog.id);
        
        // Tạo số lượt xem giả
        const viewCount = generateFakeViews(blog.id);
        
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        blogCard.innerHTML = `
            <div class="blog-card-image">
                <img src="posts/${blog.id}/thumbnail.jpg" alt="${blog.title}" onerror="this.src='images/no-image.jpg'">
            </div>
            <div class="blog-card-content">
                <h3 class="blog-title" title="${blog.title}" style="text-align: left; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; line-height: 1.4; -webkit-box-orient: vertical; max-height: 2.8em; margin-bottom: 0.5rem;">${blog.title}</h3>
                <div class="blog-meta">
                    <div class="blog-meta-left">
                        <span class="blog-date"><i class="far fa-calendar-alt"></i> ${formatDate(blog.date)}</span>
                        <span class="blog-category"><i class="fas fa-folder"></i> ${blog.category}</span>
                    </div>
                    <div class="blog-meta-right">
                        <span class="blog-views"><i class="far fa-eye"></i> ${viewCount} lượt xem</span>
                    </div>
                </div>
                <p class="blog-excerpt">${blog.excerpt}</p>
                <a href="#blog=${blog.id}" class="read-more">Đọc tiếp <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
        
        // Thêm xử lý sự kiện click - phần này không thay đổi
        blogCard.addEventListener('click', function(e) {
            console.log("Blog card clicked:", blog.id);
            
            // Nếu click vào link, để link xử lý như bình thường
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                return;
            }
            
            // Nếu click vào phần khác của card, chuyển hướng sang blog
            e.preventDefault();
            window.location.hash = `blog=${blog.id}`;
        });

        return blogCard;
    }

    function loadBlogPost(blogId) {
        console.log("Loading blog post:", blogId);
        
        if (!postContent) {
            postContent = document.getElementById('post-content');
            if (!postContent) {
                console.error("Post content container not found!");
                return;
            }
        }
        
        if (!blogPostSection) {
            blogPostSection = document.getElementById('blog-post');
            if (!blogPostSection) {
                console.error("Blog post section not found!");
                return;
            }
        }
        
        // Hiển thị section blog post
        showSection(blogPostSection);
        
        // Kiểm tra xem danh sách bài viết đã được tải chưa
        if (!blogDataLoaded || allBlogPosts.length === 0) {
            console.log("Blog data not loaded yet, loading before fetching post");
            
            // Show loading in post content
            postContent.innerHTML = '<div class="loading">Đang tải danh sách bài viết...</div>';
            
            // Tải danh sách bài viết trước
            loadBlogListData()
                .then(() => {
                    // Sau khi tải xong danh sách, tiếp tục tải bài viết
                    fetchBlogPost(blogId);
                })
                .catch(error => {
                    console.error("Error loading blog data:", error);
                    postContent.innerHTML = `
                        <h2>Lỗi khi tải danh sách bài viết</h2>
                        <p>${error.message}</p>
                        <p>Vui lòng thử lại sau.</p>
                    `;
                });
        } else {
            // Danh sách bài viết đã được tải, tiếp tục tải bài viết
            fetchBlogPost(blogId);
        }
    }
    
    function fetchBlogPost(blogId) {
        console.log("Fetching blog post content:", blogId);
        
        // Kiểm tra xem blog có tồn tại không
        const blogExists = allBlogPosts.some(blog => blog.id === blogId);
        if (!blogExists) {
            console.error(`Blog with ID ${blogId} not found in allBlogPosts`);
            postContent.innerHTML = `
                <h2>Không tìm thấy bài viết</h2>
                <p>Bài viết với ID "${blogId}" không tồn tại.</p>
                <a href="#blogs" class="btn">Quay lại danh sách bài viết</a>
            `;
            return;
        }
        
        // Show loading in post content
        postContent.innerHTML = '<div class="loading">Đang tải bài viết...</div>';
        
        // Log the markdown file path
        console.log("Fetching markdown from:", `posts/${blogId}/index.md`);

        // Fetch the markdown file
        fetch(`posts/${blogId}/index.md`)
            .then(response => {
                console.log("Fetch response status:", response.status);
                if (!response.ok) {
                    throw new Error(`Không thể tải bài viết (HTTP ${response.status})`);
                }
                return response.text();
            })
            .then(markdown => {
                // Xử lý frontmatter - trích xuất metadata
                let processedMarkdown = markdown;
                let postTitle = '';
                let postDate = '';
                let postCategory = '';
                
                // Kiểm tra xem có frontmatter không (nằm giữa hai dấu ---)
                const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
                const frontmatterMatch = markdown.match(frontmatterRegex);
                
                if (frontmatterMatch) {
                    // Trích xuất thông tin từ frontmatter
                    const frontmatter = frontmatterMatch[1];
                    
                    // Lấy tiêu đề
                    const titleMatch = frontmatter.match(/title:\s*(.*)/i);
                    if (titleMatch) postTitle = titleMatch[1].trim();
                    
                    // Lấy ngày
                    const dateMatch = frontmatter.match(/date:\s*(.*)/i);
                    if (dateMatch) {
                        const date = new Date(dateMatch[1].trim());
                        postDate = date.toLocaleDateString('vi-VN', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                        });
                    }
                    
                    // Lấy danh mục
                    const categoryMatch = frontmatter.match(/category:\s*(.*)/i);
                    if (categoryMatch) postCategory = categoryMatch[1].trim();
                    
                    // Loại bỏ phần frontmatter khỏi markdown
                    processedMarkdown = markdown.replace(frontmatterRegex, '');
                }
                
                // Process markdown to fix image paths
                processedMarkdown = processedMarkdown.replace(
                    /!\[(.*?)\]\(((?!http|\/\/|\.\/|\.\.\/)[^)]+)\)/g, 
                    `![$1](posts/${blogId}/images/$2)`
                );
                
                // Convert markdown to HTML using marked library
                const html = marked.parse(processedMarkdown);
                
                // Tạo header cho bài viết với thông tin từ frontmatter
                let postHeader = '';
                if (postTitle || postDate || postCategory) {
                    // Tạo số lượt xem giả
                    const viewCount = generateFakeViews(blogId);
                    
                    postHeader = `
                        <div class="post-header">
                            ${postTitle ? `<h1 class="post-title" style="font-size: 2.5rem; margin-bottom: 0.5rem; color: #333; font-weight: bold;">${postTitle}</h1>` : ''}
                            <div class="post-meta">
                                <div class="post-meta-left">
                                    ${postDate ? `<span class="post-date"><i class="far fa-calendar-alt"></i> ${postDate}</span>` : ''}
                                    ${postCategory ? `<span class="post-category"><i class="fas fa-folder"></i> ${postCategory}</span>` : ''}
                                </div>
                                <div class="post-meta-right">
                                    <span class="post-views"><i class="far fa-eye"></i> ${viewCount} lượt xem</span>
                                </div>
                            </div>
                        </div>
                    `;
                }
                
                // Tìm bài viết trước và sau
                const currentIndex = allBlogPosts.findIndex(blog => blog.id === blogId);
                console.log("Current index:", currentIndex, "Total blogs:", allBlogPosts.length);
                
                const prevBlog = currentIndex > 0 ? allBlogPosts[currentIndex - 1] : null;
                const nextBlog = currentIndex < allBlogPosts.length - 1 ? allBlogPosts[currentIndex + 1] : null;
                
                console.log("Prev blog:", prevBlog);
                console.log("Next blog:", nextBlog);

                // Tạo phần điều hướng Blog trước và Blog sau với data-blog-id thay vì href
                let navigationHtml = `
                    <div class="blog-navigation">
                        ${prevBlog ? `<a data-blog-id="${prevBlog.id}" class="prev-blog"><i class="fas fa-arrow-left"></i> ${prevBlog.title}</a>` : '<span></span>'}
                        ${nextBlog ? `<a data-blog-id="${nextBlog.id}" class="next-blog">${nextBlog.title} <i class="fas fa-arrow-right"></i></a>` : '<span></span>'}
                    </div>
                `;
                
                // Display the blog post with custom header, content, and navigation
                postContent.innerHTML = postHeader + `<div class="post-content">${html}</div>` + navigationHtml;
                
                // Add syntax highlighting if needed
                if (window.Prism) {
                    Prism.highlightAll();
                }
                
                // Thêm sự kiện click cho các liên kết prev/next
                setTimeout(() => {
                    const prevLink = postContent.querySelector('.prev-blog');
                    const nextLink = postContent.querySelector('.next-blog');
                    
                    if (prevLink) {
                        prevLink.addEventListener('click', function(e) {
                            e.preventDefault();
                            const blogId = this.getAttribute('data-blog-id');
                            console.log("Navigation to previous blog:", blogId);
                            isNavigatingBlog = true;
                            loadBlogPost(blogId);
                            window.location.hash = `blog=${blogId}`;
                        });
                    }
                    
                    if (nextLink) {
                        nextLink.addEventListener('click', function(e) {
                            e.preventDefault();
                            const blogId = this.getAttribute('data-blog-id');
                            console.log("Navigation to next blog:", blogId);
                            isNavigatingBlog = true;
                            loadBlogPost(blogId);
                            window.location.hash = `blog=${blogId}`;
                        });
                    }
                }, 100);
                
                // Scroll to top
                window.scrollTo(0, 0);
            })
            .catch(error => {
                console.error('Error loading blog post:', error);
                postContent.innerHTML = `
                    <h2>Lỗi khi tải bài viết</h2>
                    <p>${error.message}</p>
                    <p>Vui lòng kiểm tra lại đường dẫn hoặc thử lại sau.</p>
                `;
            });
    }

    function checkUrlHash() {
        const hash = window.location.hash;
        console.log("Checking hash:", hash);
        
        // Nếu đang điều hướng giữa các blog, không xử lý thêm
        if (isNavigatingBlog) {
            console.log("Navigation in progress, skipping hash check");
            isNavigatingBlog = false;
            return;
        }
        
        if (hash.startsWith('#blog=')) {
            const blogId = hash.replace('#blog=', '');
            console.log("Should load blog:", blogId);
            
            // Hiển thị blog section trước khi tải bài viết
            if (blogPostSection) {
                showSection(blogPostSection);
            }
            
            // Tải bài viết 
            loadBlogPost(blogId);
            
        } else if (hash === '#blogs') {
            // Show blogs section
            console.log("Showing blogs section");
            showSection(blogsSection);
            setActiveLink(blogsLink);
            loadBlogList();
            
        } else {
            // Default to About Me section
            console.log("Showing about me section");
            showSection(aboutSection);
            setActiveLink(aboutLink);
        }
    }

    function loadAllBlogs() {
        console.log("Loading all blogs for pagination");
        
        const allBlogsContainer = document.getElementById('all-blogs-container');
        if (!allBlogsContainer) {
            console.error("All blogs container not found!");
            return;
        }
        
        const paginationContainer = document.getElementById('pagination');
        if (!paginationContainer) {
            console.error("Pagination container not found!");
            return;
        }

        allBlogsContainer.innerHTML = ''; // Xóa nội dung cũ
        
        // Kiểm tra xem có bài viết không
        if (!allBlogPosts || allBlogPosts.length === 0) {
            allBlogsContainer.innerHTML = '<p>Chưa có bài viết nào.</p>';
            return;
        }
        
        const startIndex = (currentPage - 1) * blogsPerPage;
        const endIndex = startIndex + blogsPerPage;
        const blogsToDisplay = allBlogPosts.slice(startIndex, endIndex);

        blogsToDisplay.forEach(blog => {
            const blogCard = createBlogCard(blog);
            allBlogsContainer.appendChild(blogCard);
        });

        renderPagination();
    }

    function renderPagination() {
        console.log("Rendering pagination");
        
        const paginationContainer = document.getElementById('pagination');
        if (!paginationContainer) return;
        
        paginationContainer.innerHTML = ''; // Xóa nội dung cũ
        
        if (!allBlogPosts || allBlogPosts.length === 0) return;
        
        const totalPages = Math.ceil(allBlogPosts.length / blogsPerPage);
        if (totalPages <= 1) return; // Không cần phân trang nếu chỉ có 1 trang

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.className = i === currentPage ? 'active' : '';
            button.addEventListener('click', () => {
                currentPage = i;
                loadAllBlogs();
            });
            paginationContainer.appendChild(button);
        }
    }

    // Gán hàm cho window.blogApp để có thể truy cập từ bên ngoài
    window.blogApp = {
        loadBlogPost: loadBlogPost,
        checkUrlHash: checkUrlHash,
        loadBlogList: loadBlogList
    };
})();
