import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FileText, Video, Image, File, Search, Tag } from "lucide-react";
import { Layout } from "../components/layout";
import { HeroSection } from "../components/HeroSection";
import { Button, Card, CardBody } from "../components/ui";
import {
  getUploadedResources,
  subscribeToUploadedResources,
  type UploadedResource,
} from "../utils/resourceUploads";

const typeLabels: Record<UploadedResource["type"], string> = {
  pdf: "PDF",
  video: "Video",
  document: "Document",
  image: "Image",
  other: "Other",
};

const typeIcons: Record<UploadedResource["type"], React.ReactNode> = {
  pdf: <FileText className="w-5 h-5 text-error-500" />,
  video: <Video className="w-5 h-5 text-primary-500" />,
  document: <File className="w-5 h-5 text-blue-500" />,
  image: <Image className="w-5 h-5 text-secondary-500" />,
  other: <File className="w-5 h-5 text-neutral-500" />,
};

export const UploadedResourcesPage: React.FC = () => {
  const [resources, setResources] = useState<UploadedResource[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    const refresh = () => setResources(getUploadedResources());
    refresh();
    return subscribeToUploadedResources(refresh);
  }, []);

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesSearch =
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );
      const matchesType = !selectedType || resource.type === selectedType;

      return matchesSearch && matchesType;
    });
  }, [resources, searchTerm, selectedType]);

  return (
    <Layout>
      <HeroSection
        title="Uploaded Resources"
        subtitle="Fresh uploads from the admin team. Browse the newest guides, templates, and media added to the platform."
      />

      <div className="min-h-screen bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          <Card>
            <CardBody className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-neutral-400" />
                  </div>
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Search uploaded resources..."
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                  />
                </div>
                <select
                  className="px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={selectedType}
                  onChange={(event) => setSelectedType(event.target.value)}
                >
                  <option value="">All Types</option>
                  <option value="pdf">PDF</option>
                  <option value="video">Video</option>
                  <option value="document">Document</option>
                  <option value="image">Image</option>
                  <option value="other">Other</option>
                </select>
                <Link to="/resources">
                  <Button variant="secondary" className="w-full lg:w-auto">
                    Back to Library
                  </Button>
                </Link>
              </div>
            </CardBody>
          </Card>

          {filteredResources.length === 0 ? (
            <Card>
              <CardBody className="p-8 text-center space-y-3">
                <p className="text-lg font-semibold text-neutral-900">
                  No uploads yet
                </p>
                <p className="text-sm text-neutral-600">
                  Check back soon for new guides and resources from the admin team.
                </p>
              </CardBody>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredResources.map((resource) => (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                  <CardBody className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        {typeIcons[resource.type]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-lg font-semibold text-neutral-900">
                              {resource.title}
                            </h3>
                            <p className="text-sm text-neutral-600 mt-1">
                              {resource.description}
                            </p>
                          </div>
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary-700">
                            {typeLabels[resource.type]}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 mt-3">
                          <span className="flex items-center gap-1">
                            <File className="w-4 h-4" />
                            {resource.fileName}
                          </span>
                          <span>{(resource.fileSize / 1024 / 1024).toFixed(2)} MB</span>
                          <span>{new Date(resource.createdAt).toLocaleDateString()}</span>
                        </div>

                        {resource.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {resource.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-neutral-100 text-neutral-600"
                              >
                                <Tag className="w-3 h-3 mr-1" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <span className="text-xs text-neutral-500">
                        Category: <span className="font-medium text-neutral-700">{resource.category}</span>
                      </span>
                      <Button variant="secondary" className="w-full sm:w-auto" disabled>
                        File available on request
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
