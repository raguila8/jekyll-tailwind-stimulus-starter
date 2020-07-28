task default: :serve

task :init_packs do
  packs_path = "./_includes/packs.html"
  sh "touch #{packs_path}" if not File.file?(packs_path)
end

task build: [:init_packs] do
  sh "yarn build"
  sh "bundle exec jekyll build"
end

task serve: [:init_packs] do
  sh "foreman start"
end
