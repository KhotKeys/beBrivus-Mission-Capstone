import React, { useState } from "react";
import { Upload, FileText, Video, Image, File, Tag, CheckCircle } from "lucide-react";
import { Button, Card, CardBody } from "../../components/ui";
import { saveUploadedResource } from "../../utils/resourceUploads";

const typeOptions = [
  { value: "pdf", label: "PDF" },
  { value: "video", label: "Video" },
  { value: "document", label: "Document" },
  { value: "image", label: "Image" },
  { value: "other", label: "Other" },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "pdf":
    case "document":
      return FileText;
    case "video":
      return Video;
    case "image":
      return Image;
    default:
      return File;
  }
};

export const ResourceUploadPage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("pdf");
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [saved, setSaved] = useState(false);

  const TypeIcon = getTypeIcon(type);

  const handleAddTag = () => {
    const trimmed = currentTag.trim();
    if (!trimmed || tags.includes(trimmed)) return;
    setTags([...tags, trimmed]);
    setCurrentTag("");
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) return;

    saveUploadedResource({
      id: crypto.randomUUID(),
      title,
      description,
      category: category || "General",
      type: type as "pdf" | "video" | "document" | "image" | "other",
      tags,
      fileName: file.name,
      fileSize: file.size,
      mimeType: file.type || "application/octet-stream",
      createdAt: new Date().toISOString(),
    });

    setSaved(true);
    setTitle("");
    setDescription("");
    setCategory("");
    setType("pdf");
    setTags([]);
    setCurrentTag("");
    setFile(null);

    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Add Resource</h1>
          <p className="text-neutral-600 mt-1">
            Upload guides, templates, tutorials, and videos for students and graduates.
          </p>
        </div>
        {saved && (
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-success-100 text-success-700 rounded-lg">
            <CheckCircle className="w-4 h-4" />
            Resource published
          </div>
        )}
      </div>

      <Card>
        <CardBody className="p-6">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="e.g., Scholarship Essay Template"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Description
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    rows={4}
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    placeholder="Short summary for students"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Category
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      value={category}
                      onChange={(event) => setCategory(event.target.value)}
                      placeholder="e.g., Applications"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Resource Type
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      value={type}
                      onChange={(event) => setType(event.target.value)}
                    >
                      {typeOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Tags
                  </label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      className="flex-1 px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      value={currentTag}
                      onChange={(event) => setCurrentTag(event.target.value)}
                      placeholder="Add a tag"
                    />
                    <Button type="button" variant="secondary" onClick={handleAddTag}>
                      <Tag className="w-4 h-4 mr-2" />
                      Add Tag
                    </Button>
                  </div>
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => handleRemoveTag(tag)}
                            className="text-primary-600 hover:text-primary-800"
                          >
                            &times;
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Upload File
                  </label>
                  <label className="flex flex-col items-center justify-center border-2 border-dashed border-neutral-300 rounded-xl p-6 text-center cursor-pointer hover:border-primary-400">
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.png,.jpg,.jpeg,.mp4,.mov,.avi"
                      onChange={(event) => setFile(event.target.files?.[0] || null)}
                      required
                    />
                    <Upload className="w-6 h-6 text-neutral-500 mb-2" />
                    <p className="text-sm text-neutral-600">
                      Drag a file here or click to upload
                    </p>
                    <p className="text-xs text-neutral-500 mt-1">
                      PDF, video, image, or document
                    </p>
                  </label>

                  {file && (
                    <div className="flex items-center gap-3 mt-4 p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                      <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                        <TypeIcon className="w-5 h-5 text-primary-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-neutral-900 truncate">
                          {file.name}
                        </p>
                        <p className="text-xs text-neutral-500">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-primary-50 border border-primary-100 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-primary-700 mb-2">
                    Visibility
                  </h3>
                  <p className="text-sm text-primary-700">
                    This resource will appear on the student-facing uploads page.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-end gap-3">
              <Button type="submit" className="bg-primary-600 hover:bg-primary-700 text-white">
                Publish Resource
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};
